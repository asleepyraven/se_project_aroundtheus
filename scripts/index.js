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

// profile modal
const modalEditEl = document.querySelector("#js-modal_type_edit");
const userName = document.querySelector(".profile__name");
const modalName = document.querySelector("#modal__profile");
const description = document.querySelector(".profile__subtitle");
const modalDescription = document.querySelector("#modal__description");
const editButton = document.querySelector(".profile__button-edit");
const profileCloseButton = modalEditEl.querySelector(".modal__container-close");
const profileEditForm = document.querySelector("#profile-edit-form");
// experimental

// image modal
const modalAddImageEl = document.querySelector("#js-modal_type_add");
const imageModal = document.querySelector("#js-modal_type_image");
const saveButton = document.querySelector(".modal__save-button");
const imageSubmitButton = modalAddImageEl.querySelector(".modal__save-button");
const cardAddImage = document.querySelector(".profile__button-add");
const imageEditForm = document.querySelector("#image-edit-form");
const imageEnlarge = imageModal.querySelector("img");
const imageCaption = imageModal.querySelector("p");
const enlargeCloseBtn = imageModal.querySelector(".modal__image-close");

// event listener "close enlarged image"
enlargeCloseBtn.addEventListener("click", () => {
  closeModal(imageModal);
});

// close modals by pushing escape key

/*window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(imageModal);
  }
  if (e.key === "Escape") {
    closeModal(modalEditEl);
  }
  if (e.key === "Escape") {
    closeModal(modalAddImageEl);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(imageModal);
  }
});*/

// close modals by clicking outside

// handle rendering cards
const cardTemplate =
  document.querySelector("#template").content.firstElementChild;
const cardListEl = document.querySelector(".gallery");
const addImageCloseBtn = modalAddImageEl.querySelector(
  ".modal__container-close"
);

// functions
function closeModalOnRemoteClick(evt) {
  const modalOpened = document.querySelector(".modal_opened");
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(modalOpened);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalByEscape);
  document.addEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalByEscape);
  document.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function renderCard(cardEl, container) {
  container.prepend(cardEl);
}

function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

// main function that creates all image cards
function getCardView(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const cardImageEl = cardEl.querySelector(".gallery__image");
  const cardTitleEl = cardEl.querySelector(".gallery__image-title");
  const cardLikeBtn = cardEl.querySelector(".gallery__image-like");
  const imageDeleteButton = cardEl.querySelector(".gallery__image-trash");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardTitleEl.textContent;
  cardTitleEl.textContent = cardData.name;

  // event listener "like button"
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("gallery__image-like_active");
  });
  // event listener "image delete button"
  imageDeleteButton.addEventListener("click", () => {
    cardEl.remove();
  });
  // event listener "open enlarged image"
  cardImageEl.addEventListener("click", () => {
    imageEnlarge.src = cardData.link;
    imageEnlarge.alt = cardTitleEl.textContent;
    imageCaption.textContent = cardTitleEl.textContent;
    openModal(imageModal);
  });
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
  const modalInputs = modalAddImageEl.querySelectorAll(".modal__input");
  const cardView = getCardView({
    name,
    link,
  });
  renderCard(cardView, cardListEl);
  closeModal(modalAddImageEl);
  imageEditForm.reset();
  toggleButtonState(modalInputs, imageSubmitButton, config);
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

/*document.addEventListener("click", (e) => {
  if (e.target === openedModal) {
    closeModal(openedModal);
  }
});*/

// open/close modals clicking outside

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
