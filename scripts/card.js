export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardEl
      .querySelector(".gallery__image-like")
      .addEventListener("click", () => {
        console.log("hi");
      });
    this._cardEl
      .querySelector(".gallery__image-trash")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
  }

  _handleLikeIcon() {
    this._cardEl
      .querySelector(".gallery__image-like")
      .classList.toggle("gallery__image-like_active");
  }

  _handleDeleteCard() {
    this._cardEl.remove();
    this._cardEl = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector("#template__card")
      .cloneNode(true);
  }

  getView() {
    // get the card view
    this._cardEl = this._getTemplate();
    // set event listeners
    this._setEventListeners();
    // return the card
    this._cardEl.querySelector(".gallery__image").src = this._link;
    this._cardEl.querySelector(".gallery__image").alt = this._name;
    this._cardEl.querySelector(".gallery__image-title").textContent =
      this._name;
    return this._cardEl;
  }
}
