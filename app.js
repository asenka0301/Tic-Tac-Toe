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
   
   const fillCell = (sign, index) => {
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

})()

const displayController = ( () => {
   const fields = document.getElementById('gird');
   const player_1_score = document.querySelector('.player_1_score');
   const player_2_score = document.querySelector('.player_2_score');
   const result = document.querySelector('.results');
   const resetBtn = document.getElementById('resetBtn');


  


   


})()

const gameControll = (() => {

   const Player1 = Player('X');
   const Player2 = Player('O');
   let round = 1;
   let gameIsOver = false;
})()











