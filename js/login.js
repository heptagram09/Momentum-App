const login = document.querySelector("#login");
const loginInput = document.querySelector("#login-middle__input");
const loginSubmit = document.querySelector("#login-submit");
const loginForm = document.querySelector("#login-form");
const loginRealInput = document.querySelector("#login-middle__realInput");
const greeting = document.querySelector("#greeting");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const videoSpan = document.querySelector(".video-span");
const videoPlayer = document.querySelector("#player");
const weather = document.querySelector(".inner-w");
const weatherer = document.querySelector(".inner-ww");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginRealInput.value;
  login.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  login.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `${username}님`;
  header.classList.remove(HIDDEN_CLASSNAME);
  main.classList.remove(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
  videoPlayer.classList.remove(HIDDEN_CLASSNAME);
  videoSpan.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
  weatherer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  header.classList.add(HIDDEN_CLASSNAME);
  main.classList.add(HIDDEN_CLASSNAME);
  footer.classList.add(HIDDEN_CLASSNAME);
  videoPlayer.classList.add(HIDDEN_CLASSNAME);
  videoSpan.classList.add(HIDDEN_CLASSNAME);
  weather.classList.add(HIDDEN_CLASSNAME);
  weatherer.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
