'use strict';
let clock = document.getElementById("clock");
let userName = document.getElementById("userName");
let yourName = document.getElementById("yourName");
let welcome = document.getElementById("welcome");
let wiseQuotes = document.getElementById("wiseQuotes");
let userInputName = "";


function imgChange () {
    let imgSrc = `images/backGround${Math.floor(Math.random()*3)}.jpg`
    document.body.style.backgroundImage = `url(${imgSrc})`;
}


function clockGen() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
};

function enterkey() {
    if (window.event.keyCode == 13) {
        userInputName = userName.value;
        yourName.classList.add('disappear');
        if(yourName.style.opacity = 0 || true) {
            yourName.innerHTML = `Good afternoon ${userInputName}`;
            yourName.classList = 'appear';
        };
    }
}

let quotesArr = ["Life is not a problem to be solved, but a reality to be experienced.",
                "Life is ten percent what happens to you and ninety percent how you respond to it.",
                "Believe that life is worth living and your belief will help create the fact.",
                "The only disability in life is a bad attitude."
                ];
let quoteCnt = 0;

function incrementIndex() {
    if (quoteCnt < quotesArr.length - 1) {
        quoteCnt++;
    }
    else {
        quoteCnt = 0;
    }
};

function quotesGen() {
    incrementIndex();
    wiseQuotes.classList = 'disappear';
    setTimeout(appearQuotes, 5000);
};

function appearQuotes() {
    wiseQuotes.classList = 'appear';
    wiseQuotes.innerHTML = quotesArr[quoteCnt];
}


function init() {
    imgChange ();
    setInterval(clockGen, 100);
    setInterval(quotesGen , 9000)
};

init();



