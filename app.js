function StartGame(startBtn) {
   const controlsBtn = document.querySelector('.controls');
   const menu = document.querySelector('.menu');

   controlsBtn.style.display = 'flex';
   controlsBtn.style.opacity = '1';

   menu.style.position = 'absolute';
   menu.style.animation = 'menu 1.5s';
   menu.style.top = '5%';

   startBtn.style.display = 'none';
}
function FirstStart(){
   const startBtn = document.querySelector('.start_btn');
   startBtn.addEventListener('click', function () {
      StartGame(startBtn);
   });
}
FirstStart();

const gameModes = document.querySelectorAll('.controls .btn');
gameModes.forEach((gameMode) => {
   gameMode.addEventListener('click', () => {
      const controlsBtn = document.querySelector('.controls');
      controlsBtn.style.display = 'none';

      const dashboard = document.querySelector('.dashboard');
      dashboard.classList.add('dashboard-visible');
     
      if(gameMode.id === 'btn-computer') {
         const player2 = document.querySelector('.player_2');
         player2.textContent = 'Computer (O)'
      }
   });
});

const Player = (sign) => {

   const getSign = () => {
      return sign;
   }
   return { getSign };
}

const gameBoard = (() => {
   
   const board = [
      '', '', '',
      '', '', '',
      '', '', '',
   ];
   
   const fillCell = (index, sign) => {
      board[index] = sign;
   }

   const getSign = (index) => {
      return board[index];
   }

   const cleanCells = () => {
      for(let i = 0; i < board.length; i++) {
         board[i] = '';
      }
   };
   return { fillCell, getSign, cleanCells }
})();

const displayController = ( () => {
   const fields = document.querySelectorAll('.cell');
   const message = document.getElementById('message');
   const resetBtn = document.querySelector('.btn-reset');

   fields.forEach((field) => 
      field.addEventListener('click', (e) => {
         if(gameController.gameIsOver() || e.target.textContent !== '') return 
         gameController.playRound(parseInt(e.target.dataset.cell));
         updateGameBoard();
      })
   );

   const updateGameBoard = () => {
      for(let i = 0; i < fields.length; i++) {
         fields[i].textContent = gameBoard.getSign(i);
      }
   };

   const setMessage = (msg) => {
      message.textContent = msg;
   }

   resetBtn.addEventListener('click', () => {
      gameBoard.cleanCells();
      gameController.newGame();
      updateGameBoard();
      setMessage('Player X\'s move');
   });
   return { setMessage };
})();

const gameController = ( () => {
   const playerX = Player('X');
   const playerO = Player('O');
   let round = 1;
   let isOver = false;

   const playRound = (fieldSign) => {

      gameBoard.fillCell(fieldSign, currentPlayerSign());
      
      if(checkWinner(fieldSign)) {
         displayController.setMessage(`${currentPlayerSign()} win`);
         isOver = true;
         return;
      }
      
      if(round === 9) {
         displayController.setMessage(`It's a tie`);
         isOver = true;
         return;
      }

      round++;
      displayController.setMessage(`Player ${currentPlayerSign()}'s move`);
   }
   
   const currentPlayerSign = () => {
      return round % 2 === 1 ? playerX.getSign() : playerO.getSign();  
   }

   const gameIsOver = () => {
      return isOver;
   }

   const newGame = () => {
      isOver = false;
      round = 1;
   }
   return { playRound, gameIsOver, newGame}
})();


const checkWinner = (fieldIndex) => {
   
   const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] 
   ];

   for(let i = 0; i < combinations.length; i++) {

      let counter = 0;

      for(let j = 0; j < combinations[i].length; j++) {
        if(gameBoard.getSign(combinations[i][j]) === gameBoard.getSign(fieldIndex)) {
          counter++;
        }
      }
      if(counter === 3) {
         return true;
      }
    }
}






