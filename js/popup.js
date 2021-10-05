const feedbackShow = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".button-close-feedback");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const nameInput = feedbackPopup.querySelector("[name=name]");
const emailInput = feedbackPopup.querySelector("[name=email]");
const textInput = feedbackPopup.querySelector("[name=feedback-post]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackShow.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-feedback-show");

  if (storage) {
    nameInput.value = storage;
    emailInput.focus();
  } else {
    nameInput.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-feedback-show");
  feedbackPopup.classList.remove("modal-feedback-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!nameInput.value || !emailInput.value || !textInput.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-feedback-error");
  } else {
    if(isStorageSupport) {
      localStorage.setItem("name", nameInput.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-feedback-show");
      feedbackPopup.classList.remove("modal-feedback-error");
    }
  }
});
