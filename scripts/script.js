"use strict"

let eyeglasses = document.getElementById("eyeglasses");
let medallion = document.getElementById("medallion");
let pocket = document.getElementById("pocket");
let win = document.getElementById("win");
let list = document.getElementById("list");

eyeglasses.addEventListener("click", eyeglassesChecked); 
medallion.addEventListener("click", medallionChecked); 
pocket.addEventListener("click", pocketChecked); 

let progressObject = {
    eye: false,
    med: false,
    poc: false,
}

function isEverythingChecked() {
    if (progressObject.eye == true && progressObject.med == true && progressObject.poc == true) {
        console.log("Congrats!");
        list.classList.add("list--undisplayed");
        win.classList.remove("win--undisplayed");
    }
}

function eyeglassesChecked() {
    eyeglasses.classList.add("gothic--done");
    progressObject.eye = true;
    isEverythingChecked();
}

function medallionChecked() {
    medallion.classList.add("gothic--done");
    progressObject.med = true;
    isEverythingChecked();
}

function pocketChecked() {
    pocket.classList.add("gothic--done");
    progressObject.poc = true;
    isEverythingChecked();
}
