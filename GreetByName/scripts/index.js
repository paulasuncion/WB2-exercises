"use strict";

window.onload = init;

function init() {
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetBtnClicked;
    }
function onGreetBtnClicked() {
    alert("Hello Username!");
    }