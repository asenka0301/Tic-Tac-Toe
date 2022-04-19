const startBtn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const controlsBtn = document.querySelector('.controls');
const playerType = document.querySelectorAll('.controls .btn');
const dashboard = document.querySelector('.dashboard');
console.log(dashboard);


startBtn.addEventListener('click', function() {
    menu.style.position = 'absolute';
    menu.style.animation = 'menu 1.5s';
    menu.style.top = '5%';
    startBtn.style.display = 'none';
    controlsBtn.style.opacity = '1';
});



playerType.forEach(element => {
    element.addEventListener('click', function(){
        dashboard.classList.add('dashboard-visible');
        

    });
});
