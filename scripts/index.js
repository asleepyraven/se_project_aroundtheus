const initialCards = [
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
const modalEl = document.querySelector(".modal");
const userName = document.querySelector(".profile__name");
const modalName = document.querySelector("#modal__profile");
const description = document.querySelector(".profile__subtitle");
const modalDescription = document.querySelector("#modal__description");
const editButton = document.querySelector(".profile__button-edit");
const closeButton = document.querySelector(".modal__container-close");
const saveButton = document.querySelector(".modal__save-button");
const cardTemplate =
  document.querySelector("#template").content.firstElementChild;
const cardListEl = document.querySelector(".gallery");
const profileEditForm = document.querySelector("#profile-edit-form");
function togglePopup() {
  modalEl.classList.toggle("modal_opened");
}

function getCardEl(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const cardImageEl = cardEl.querySelector(".gallery__image");
  const cardTitleEl = cardEl.querySelector(".gallery__image-title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardTitleEl.textContent;
  return cardEl;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  userName.textContent = modalName.value;
  description.textContent = modalDescription.value;
  togglePopup();
}

// open and close pop-up && render modal text
editButton.addEventListener("click", function () {
  togglePopup();
  modalName.value = userName.textContent;
  modalDescription.value = description.textContent;
});

closeButton.addEventListener("click", togglePopup);

// save button
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// render cards
initialCards.forEach((cardData) => {
  const cardEl = getCardEl(cardData);
  cardListEl.prepend(cardEl);
});
