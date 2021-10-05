const sliderButtonOne = document.querySelector(".slider-controls button");
const sliderButtonTwo = document.querySelector(".slider-controls button:nth-child(2)");
const sliderButtonThree = document.querySelector(".slider-controls button:nth-child(3)");

const sliderItemOne = document.querySelector(".slider-item");
const sliderItemTwo = document.querySelector(".slider-item:nth-child(2)");
const sliderItemThree = document.querySelector(".slider-item:nth-child(3)");

const sliderBackground = document.querySelector(".slider-list");


sliderButtonOne.addEventListener("click", function () {
  this.classList.add("current");
  sliderItemOne.classList.add("slide-current");
  sliderBackground.classList.add("slider-background-1");

  sliderButtonTwo.classList.remove("current");
  sliderButtonThree.classList.remove("current");
  sliderItemTwo.classList.remove("slide-current");
  sliderItemThree.classList.remove("slide-current");
  sliderBackground.classList.remove("slider-background-2");
  sliderBackground.classList.remove("slider-background-3");
});

sliderButtonTwo.addEventListener("click", function () {
  this.classList.add("current");
  sliderItemTwo.classList.add("slide-current");
  sliderBackground.classList.add("slider-background-2");

  sliderButtonOne.classList.remove("current");
  sliderButtonThree.classList.remove("current");
  sliderItemOne.classList.remove("slide-current");
  sliderItemThree.classList.remove("slide-current");
  sliderBackground.classList.remove("slider-background-1");
  sliderBackground.classList.remove("slider-background-3");
});

sliderButtonThree.addEventListener("click", function () {
  this.classList.add("current");
  sliderItemThree.classList.add("slide-current");
  sliderBackground.classList.add("slider-background-3");

  sliderButtonOne.classList.remove("current");
  sliderButtonTwo.classList.remove("current");
  sliderItemOne.classList.remove("slide-current");
  sliderItemTwo.classList.remove("slide-current");
  sliderBackground.classList.remove("slider-background-1");
  sliderBackground.classList.remove("slider-background-2");
});
