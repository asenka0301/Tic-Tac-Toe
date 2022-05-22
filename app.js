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
      for(let i = 0; i < board.lengh; i++) {
         board[i] = '';
      }
   };

   return { fillCell, getSign, cleanCells }

})();

const displayController = ( () => {
   const fields = document.querySelectorAll('.cell');
   const message = document.getElementById('message');
   const resetBtn = document.getElementById('btn-reset');

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

   return { setMessage };


})();

const gameController = ( () => {
   const playerX = Player('X');
   const playerO = Player('O');
   let round = 1;
   let isOver = false;

   const playRound = (fieldSign) => {
      gameBoard.fillCell(fieldSign, currentPlayerSign());
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

   return { playRound, gameIsOver }
})();







