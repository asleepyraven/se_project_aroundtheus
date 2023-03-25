// hold initial images
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
const modalEditEl = document.querySelector("#js-modal_type_edit");
const modalAddImageEl = document.querySelector("#js-modal_type_add");
const imageModal = document.querySelector("#js-modal_type_image");
const userName = document.querySelector(".profile__name");
const modalName = document.querySelector("#modal__profile");
const description = document.querySelector(".profile__subtitle");
const modalDescription = document.querySelector("#modal__description");
const editButton = document.querySelector(".profile__button-edit");
const profileCloseButton = modalEditEl.querySelector(".modal__container-close");
const addImageCloseBtn = modalAddImageEl.querySelector(
  ".modal__container-close"
);
const enlargeCloseBtn = imageModal.querySelector(".modal__image-close");
const saveButton = document.querySelector(".modal__save-button");
const cardAddImage = document.querySelector(".profile__button-add");
const cardTemplate =
  document.querySelector("#template").content.firstElementChild;
const cardListEl = document.querySelector(".gallery");
const profileEditForm = document.querySelector("#profile-edit-form");
const imageEditForm = document.querySelector("#image-edit-form");
const imageEnlarge = imageModal.querySelector("img");
const imageCaption = imageModal.querySelector("p");
function openModal(modal) {
  modal.classList.add("modal_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function renderCard(cardEl, container) {
  container.prepend(cardEl);
}

function getCardView(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const cardImageEl = cardEl.querySelector(".gallery__image");
  const cardTitleEl = cardEl.querySelector(".gallery__image-title");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardTitleEl.textContent;
  cardTitleEl.textContent = cardData.name;
  // add event listener for like
  const cardLikeBtn = cardEl.querySelector(".gallery__image-like");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("gallery__image-like_active");
  });
  // add event listener for delete
  const imageDeleteButton = cardEl.querySelector(".gallery__image-trash");
  imageDeleteButton.addEventListener("click", () => {
    cardEl.remove();
  });

  // open popup
  cardImageEl.addEventListener("click", () => {
    imageEnlarge.src = cardData.link;
    imageEnlarge.alt = cardTitleEl.textContent;
    imageCaption.textContent = cardTitleEl.textContent;
    openModal(imageModal);
  });
  // close popup
  enlargeCloseBtn.addEventListener("click", () => {
    closeModal(imageModal);
  });
  imageEnlarge.src = cardData.link;
  return cardEl;
}

// handle saving profile
profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userName.textContent = modalName.value;
  description.textContent = modalDescription.value;
  closeModal(modalEditEl);
});

// handle saving images
imageEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardView = getCardView({
    name,
    link,
  });
  renderCard(cardView, cardListEl);
  closeModal(modalAddImageEl);
});

// open/close edit profile modal
editButton.addEventListener("click", function () {
  openModal(modalEditEl);
  modalName.value = userName.textContent;
  modalDescription.value = description.textContent;
});

profileCloseButton.addEventListener("click", function () {
  closeModal(modalEditEl);
});

// open/close add image modal
cardAddImage.addEventListener("click", function () {
  openModal(modalAddImageEl);
});

addImageCloseBtn.addEventListener("click", function () {
  closeModal(modalAddImageEl);
});

// render initial cards onto page
initialCards.forEach(function (cardData) {
  const cardView = getCardView(cardData);
  renderCard(cardView, cardListEl);
});
