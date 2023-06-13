const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {
  sonic.classList.add('sjump');

  setTimeout(() => {
    sonic.classList.remove('sjump');
  }, 750);
};

const loop = setInterval(() => {
  console.log('loop');

  const pipePosition = pipe.offsetLeft;
  const sonicPosition = parseInt(window.getComputedStyle(sonic).bottom, 10);

  if (pipePosition <= 115 && pipePosition > 0 && sonicPosition < 60) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    pipe.style.animation = 'none';
    pipe.style.bottom = `${sonicPosition}px`;

    sonic.src = 'image/gameover.png';
    sonic.style.width = '150px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);
