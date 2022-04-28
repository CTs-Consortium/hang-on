// i need to make a function that removes the class of modal hidden when the corresponding button is clicked
"use strict";

// THE WEB CREATIONS BUTTON MODAL
// const modal = document.querySelector(".modal");
// const webModalBtn = document.querySelector(".website-modal");
// const webModalClose = document.querySelector(".modal-close-bar");

// const openWebModal = function () {
//   modal.classList.remove("modal-hidden");
// };

// const closeWebModal = function () {
//   modal.classList.add("modal-hidden");
// };

// // event listeners
// webModalBtn.addEventListener("click", openWebModal);
// webModalClose.addEventListener("click", closeWebModal);

// THE PHOTO BLOG BUTTON MODAL
// const modal2 = document.querySelector(".modal2");
// const photoModalBtn = document.querySelector(".photo-modal");
// const photoModalClose = document.querySelector(".modal-close-bar2");

// const openPhotoModal = function () {
//   modal2.classList.remove("modal-hidden2");
// };
// const closePhotoModal = function () {
//   modal2.classList.add("modal-hidden2");
// };

// //photo  button event listeners
// photoModalBtn.addEventListener("click", openPhotoModal);
// photoModalClose.addEventListener("click", closePhotoModal);

// // WEB APPS, MOBILE, AND MORE BUTTON MODAL
// const modal3 = document.querySelector(".modal3");
// const appModalBtn = document.querySelector(".app-modal");
// const appModalClose = document.querySelector(".modal-close-bar3");

// const openAppModal = function () {
//   modal3.classList.remove("modal-hidden3");
// };

// const closeAppModal = function () {
//   modal3.classList.add("modal-hidden3");
// };

// // web app, mobile, more event listeners
// appModalBtn.addEventListener("click", openAppModal);
// appModalClose.addEventListener("click", closeAppModal);

// commment: DRY practice
const modalsContainer = document.querySelector(".btn-modals");

modalsContainer.addEventListener("click", function (e) {
  const modalWindow = document.querySelector(".modal");

  function createClosingModal() {
    const webModalClose = document.querySelector(".modal-close-bar");
    const closeWebModal = function () {
      modalWindow.classList.add("modal-hidden");
    };
    webModalClose.addEventListener("click", closeWebModal);
  }

  switch (e.target.className) {
    case "website-modal":
      modalWindow.classList.remove("modal-hidden");
      modalWindow.innerHTML = `<div class="modal-web-creations">
      <div class="modal-close-bar">
      <span> X  </span>
      </div>
      <p>
      Click the link below to get a preview of some of my web projects!
        These are all sample websites and practice exercises that I used to
        help hone my skills.
      </p>
      <li><a href="websites.html">click here </a></li>
      <img
        class="omni-img"
        src="omni_screenshot-min.png"
        alt=""
      />
      </div>`;
      createClosingModal();
      break;
    case "photo-modal":
      modalWindow.classList.remove("modal-hidden");
      modalWindow.innerHTML = `<div class="modal-photo-gallery">
      <div class="modal-close-bar">
        <span>X</span>
      </div>
      <p>Enjoy photography? This is your stop!</p>
      <li><a href="photos.html">Photo Blog</a></li>
    </div>`;
      createClosingModal();

      break;

    case "app-modal":
      modalWindow.classList.remove("modal-hidden");
      modalWindow.innerHTML = `<div class="web-app-modal">
      <div class="modal-close-bar">
      <span>X</span>
      </div>
      <p>check out my web and mobile app projects here!</p>
      <li>
      <a href="applications.html">web apps, mobile apps, and more!</a>
      </li>
    </div>`;
      createClosingModal();
      break;

    // default:
    //   console.log("m4");
    //   break;
  }
});
