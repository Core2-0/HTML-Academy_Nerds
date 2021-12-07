const sliderControls = document.querySelector('.slider-controls');

sliderControls.addEventListener('click', function (evt) {
  const target = evt.target;
  if (target.classList.contains('slider-control') && !target.classList.contains('current')) {
    const slideId = target.dataset.slide;

    document.querySelector('.slider-control.current').classList.remove('current');
    target.classList.add('current');
    document.querySelector('.slider-item.slide-current').classList.remove('slide-current');
    document.querySelector(`[data-id="${slideId}"]`).classList.add('slide-current');
  }
});