let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// select buttons
let editButton = document.querySelector(".profile__button-edit");
let closeButton = document.querySelector(".modal__container-close");
let modalSelector = document.querySelector(".modal");
let saveButton = document.querySelector(".modal__save-button");
let username = document.querySelector(".profile__name");
let modalName = document.querySelectorAll(".modal__input")[0];
let description = document.querySelector(".profile__subtitle");
let modalDescription = document.querySelectorAll(".modal__input")[1];

// open and close pop-up && render modal text
editButton.addEventListener("click", function () {
  modalSelector.classList.add("modal_opened");
  modalName.value = username.textContent;
  modalDescription.value = description.textContent;
});

closeButton.addEventListener("click", function () {
  modalSelector.classList.remove("modal_opened");
});

// save button
saveButton.addEventListener("click", function () {
  username.textContent = modalName.value;
  description.textContent = modalDescription.value;
  modalSelector.classList.remove("modal_opened");
});
