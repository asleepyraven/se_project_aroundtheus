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
        this._handleLikeIcon();
      });
    this._cardEl
      .querySelector(".gallery__image-trash")
      .addEventListener("click", () => this._handleDeleteCard());
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

  getView() {
    this._cardEl = document
      .querySelector(this._cardSelector)
      .content.querySelector("#template__card")
      .cloneNode(true);
    // get the card view

    // set event listeners
    this._setEventListeners();
    // return the card
    return this._cardEl;
  }
}
