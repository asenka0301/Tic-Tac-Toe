function StartGame(startBtn) {
   const controlsBtn = document.querySelector('.controls');
   const menu = document.querySelector('.menu');

   controlsBtn.style.display = 'flex';
   controlsBtn.style.opacity = '1';

   menu.style.position = 'absolute';
   menu.style.animation = 'menu 1.5s';
   menu.style.top = '10%';

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

   return {getSign};

}

const gameBoard = (() => {
   
   const board = [
      '', '', '',
      '', '', '',
      '', '', '',
   ];
   
   function fillCell(cell, sign) {
      const i = cell.dataset.cell; 
      board[i] = sign;
      cell.textContent = sign;
      
      console.log(board);
   }

   function cleanBoard() {
      // 
   };

   function isCellEmpty(i) {
      if (board[i].length == 0) {
         return true;
      }
      return false;
   };

   return {
      fillCell,
   }
})()

const displayControll = ( () => {
   


})()

const gameControll = (() => {

   const Player1 = Player('X');
   const Player2 = Player('O');
   let round = 1;
   let gameIsOver = false;
   const board = document.getElementById('gird');


})()













