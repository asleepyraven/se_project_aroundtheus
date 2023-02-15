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

// select modal/profile fields
let modalSelector = document.querySelector(".modal");
let username = document.querySelector(".profile__name");
let modalName = document.querySelectorAll(".modal__input")[0];
let description = document.querySelector(".profile__subtitle");
let modalDescription = document.querySelectorAll(".modal__input")[1];
let editButton = document.querySelector(".profile__button-edit");
let closeButton = document.querySelector(".modal__container-close");
let saveButton = document.querySelector(".modal__save-button");
let cardTemplate =
  document.querySelector("#template").content.firstElementChild;
let cardListEl = document.querySelector(".gallery");
function closePopup() {
  modalSelector.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  let cardElement = cardTemplate.cloneNode(true);
  let cardImageEl = cardElement.querySelector(".gallery__image");
  let cardTitleEl = cardElement.querySelector(".gallery__image-title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardTitleEl.textContent;
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  username.textContent = modalName.value;
  description.textContent = modalDescription.value;
  closePopup();
}

// open and close pop-up && render modal text
editButton.addEventListener("click", function () {
  modalSelector.classList.add("modal_opened");
  modalName.value = username.textContent;
  modalDescription.value = description.textContent;
});

closeButton.addEventListener("click", closePopup);

// save button
saveButton.addEventListener("submit", handleProfileEditSubmit);

// render cards
initialCards.forEach((cardData) => {
  cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
