const playBtn = document.querySelector('.play'),
      audio = document.querySelector('.audio'),
      imgSrc = document.querySelector('.img__src'),
      player = document.querySelector('.buttons'),         
      cover = document.querySelector('.cover__img');
// Название песен
const songs = ['forest', 'solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];

// песня по умолчанию
let songIndex = 0;
// Play
function playSong() {
    audio.currentTime = 0;
    cover.classList.add('play')
    imgSrc.src = './img/svg/pause.svg'
    audio.play()
};
//Pause
function pauseSong() {
    cover.classList.remove('play')
    imgSrc.src = './img/svg/play.svg'
    audio.pause()
};
// Нажатие на проигрывание 
playBtn.addEventListener('click', () => {    
    const isPlay = cover.classList.contains('play');
    if (isPlay) {
        pauseSong()
    } else {
        playSong()
    }
});
// смена изображений и запуск песен
const imageBtn = document.querySelector('.header-container');
imageBtn.addEventListener('click', imageChange);

function imageChange(event) {
    if (event.target.classList.contains('header-item')) {        
        let item = event.target.dataset.item;
        cover.src = `./img/${item}.jpg`; 
        audio.src = `./audio/${item}.mp3`;
        playSong();                 
    }    
};
let buttons = document.querySelectorAll('.header-item');
// Активные кнопки
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });    
});