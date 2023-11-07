import (src="JS/scrip.js");
const height=7
const width= 13
const grid= document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
const squares = [];

function createPokBoard() {
    if (!grid) {
        console.error('El elemento grid no existe');
        return;
    }

    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);

        // anadiendo las clases segun el layout
        if (layout[i] === 1) {
            square.classList.add("ea");
        } else if (layout[i] === 2) {
            square.classList.add("eb");
        } else if (layout[i] === 3) {
            square.classList.add("ec");
        } else if (layout[i] === 4) {
            square.classList.add("ed");
        } else if (layout[i] === 5) {
            square.classList.add("ee");
        } else if (layout[i] === 6) {
            square.classList.add("ef");
        } else if (layout[i] === 7) {
            square.classList.add("eg");
        } else if (layout[i] === 8) {
            square.classList.add("eh");
        } else if (layout[i] === 9) {
            square.classList.add("ei");
        } else if (layout[i] === 10) {
            square.classList.add("ej");
        } else if (layout[i] === 11) {
            square.classList.add("ek");
        } else if (layout[i] === 12) {
            square.classList.add("el");
        } else if (layout[i] === 13) {
            square.classList.add("em");
        } else if (layout[i] === 14) {
            square.classList.add("en");
        } else if (layout[i] === 15) {
            square.classList.add("eo");
        } else if (layout[i] === 16) {
            square.classList.add("ep");
        } else if (layout[i] === 17) {
            square.classList.add("eq");
        } else if (layout[i] === 18) {
            square.classList.add("er");
        } else if (layout[i] === 19) {
            square.classList.add("es");
        } else if (layout[i] === 20) {
            square.classList.add("et");
        } else if (layout[i] === 21) {
            square.classList.add("eu");
        }
    }
}

const layout = [ 
    1124,1124,1124,1124,1124,1124,1124,1124,1124,1124,1124,1124,1124,
    1124,1125,1125,1125,        1123,1119,1119,1119,1119,1121       ,1125,1125,1125,
    1124,1125,1125,1125,        1117,1127,1130,1131,1126,1118       ,1125,1125,1125,
    1124,1125,1125,1125,        1117,1127,1129,1128,1126,1118       ,1125,1125,1125,
    1124,1125,1125,1125,        1116,1122,1122,1122,1122,1120       ,1125,1125,1125,
    1112    ,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,1125,    1112,
    1111    ,1125,  1115,1114,1113    ,1125,1125,1125,1125,1125,1125,1125,    1111,
];
