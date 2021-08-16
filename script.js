"use strict";

var audio = document.getElementById("audio");

document.querySelector(".deeznuts").addEventListener("click", function () {
  document.querySelector(".message").classList.remove("hidden");
  document.querySelector(".deeznuts").textContent = "DEEZ NUTS";
  audio.play();
});
