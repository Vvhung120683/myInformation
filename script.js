"use strict";
const confirm = document.querySelector(".confirm");
const active = document.querySelector(".active");
const email = document.querySelector(".email");
// console.log(email.placeholder);
const submitBtn = document.querySelector(".submit");
console.log(submitBtn);
let check = document.querySelector(".check");
console.log(check);
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
submitBtn.onclick = function () {
  if (!email.value.match(regex) || email.value == "null") {
    check.textContent = "email không hợp lệ";
  } else if (email.value.toLowerCase() === "hungvvfx44864@funix.edu.vn") {
    confirm.style.display = "none";
    active.style.display = "block";
  } else {
    check.textContent = "email cá nhân không đúng";
  }
};
const viewmore = document.querySelectorAll(".viewmore");

for (let i = 0; i < viewmore.length; i++) {
  viewmore[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;

    if (panel.style.display === "none") {
      this.textContent = "Viewless";
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
      this.textContent = "Viewmore";
    }
  });
}
