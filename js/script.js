var contactsLink = document.querySelector(".contacts-button");
var contactsModal = document.querySelector(".modal-contacts");
var closeContacts = contactsModal.querySelector(".close-contacts");
var mapLink = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".modal-map");
var closeMap = mapModal.querySelector(".close-map");
var form = contactsModal.querySelector("form");
var userName = contactsModal.querySelector("[name=name]");
var userEmail = contactsModal.querySelector("[name=email]");
var userText = contactsModal.querySelector("[name=text]");

var isStorageSupport = true;
var storage = {
  name: "",
  email: ""
};

try {
  storage.name = localStorage.getItem("userName");
  storage.email = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.remove("modal-display-none");
  if (storage.name) {
    userName.value = storage.name;
    if (storage.email) {
      userEmail.value = storage.email;
      userText.focus();
    } else {
      userEmail.focus();
    }
  } else {
    userName.focus();
  }
});

closeContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.add("modal-display-none");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-display-none");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-display-none");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    contactsModal.classList.remove("modal-error");
    contactsModal.offsetWidth = contactsModal.offsetWidth;
    contactsModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!contactsModal.classList.contains("modal-display-none")) {
      contactsModal.classList.add("modal-display-none");
    }
    if (!mapModal.classList.contains("modal-display-none")) {
      mapModal.classList.add("modal-display-none");
    }
  }
});

var servicesButtonList = document.querySelectorAll(".service-button");
console.log(servicesButtonList);
var servicesSlideList = document.querySelectorAll(".service-slide");
console.log(servicesSlideList);

for (var i = 0; i < servicesButtonList.length; ++i) {
  servicesAddListener(i);
}

function servicesAddListener(iterator) {
  console.log(iterator);
  servicesButtonList[iterator].addEventListener("click", function (evt) {
    console.log(iterator);
    if (!servicesButtonList[iterator].classList.contains("current-service-button")) {
      document.querySelector(".current-service-button").classList.remove("current-service-button");
      servicesButtonList[iterator].classList.add("current-service-button");
      document.querySelector(".current-service-slide").classList.remove("current-service-slide");
      servicesSlideList[iterator].classList.add("current-service-slide");
    }
  });
}

var slideButtonList = document.querySelectorAll(".slide-button");
console.log(slideButtonList);
var slideList = document.querySelectorAll(".slide");
console.log(slideList);

for (var j = 0; j < servicesSlideList.length; ++j) {
  slidesAddListener(j);
}

function slidesAddListener(jterator) {
  console.log(jterator);
  slideButtonList[jterator].addEventListener("click", function (evt) {
    console.log(slideButtonList[jterator]);
    console.log(slideList[jterator]);
    if (!slideButtonList[jterator].classList.contains("current-slide-button")) {
      document.querySelector(".current-slide-button").classList.remove("current-slide-button");
      slideButtonList[jterator].classList.add("current-slide-button");
      document.querySelector(".current-slide").classList.remove("current-slide");
      slideList[jterator].classList.add("current-slide");
    }
  });
}
