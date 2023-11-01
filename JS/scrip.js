//const width= 28;
const height= 10
const width= 15
const grid= document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
const squares = [];

/* 
//const layout = [ 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 4, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
];
*/

/*mapa*/

const layout = [ 
    46,48,46,44,8,9,45,39,39,39,41,12,1,8,9,
    47,49,47,44,7,10,38,39,39,39,40,11,1,7,10,
    46,48,46,44,7,10,37,36,35,34,33,11,1,7,10,
    47,49,47,44,7,19,28,29,30,31,32,11,1,7,19,
    46,48,46,44,21,20,27,26,25,24,23,22,1,21,20,
    47,49,47,44,3,2,4,1,3,2,2,4,1,3,2,
    46,48,46,44,1,1,1,1,1,1,1,1,1,5,52,
    47,49,47,44,1,5,16,16,16,50,15,14,1,6,53,
    46,48,46,44,1,6,17,17,17,51,0,13,1,7,42,
    47,49,47,44,1,7,18,18,18,18,10,11,1,7,43,
];

/*pixel x numero*/

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
        if (layout[i] === 0) {
            square.classList.add("a");
        } else if (layout[i] === 1) {
            square.classList.add("t");
        } else if (layout[i] === 2) {
            square.classList.add("b");
        } else if (layout[i] === 3) {
            square.classList.add("c");
        } else if (layout[i] === 4) {
            square.classList.add("d");
        } else if (layout[i] === 5) {
            square.classList.add("e");
        } else if (layout[i] === 6) {
            square.classList.add("f");
        } else if (layout[i] === 7) {
            square.classList.add("g");
        } else if (layout[i] === 8) {
            square.classList.add("h");
        } else if (layout[i] === 9) {
            square.classList.add("i");
        } else if (layout[i] === 10) {
            square.classList.add("j");
        } else if (layout[i] === 11) {
            square.classList.add("k");
        } else if (layout[i] === 12) {
            square.classList.add("l");
        } else if (layout[i] === 13) {
            square.classList.add("m");
        } else if (layout[i] === 14) {
            square.classList.add("n");
        } else if (layout[i] === 15) {
            square.classList.add("o");
        } else if (layout[i] === 50) {
            square.classList.add("p");
        } else if (layout[i] === 16) {
            square.classList.add("q");
        } else if (layout[i] === 51) {
            square.classList.add("r");
        } else if (layout[i] === 17) {
            square.classList.add("s");
        } else if (layout[i] === 18) {
            square.classList.add("u");
        } else if (layout[i] === 19) {
            square.classList.add("v");
        } else if (layout[i] === 20) {
            square.classList.add("w");
        } else if (layout[i] === 21) {
            square.classList.add("x");
        } else if (layout[i] === 22) {
            square.classList.add("y");
        } else if (layout[i] === 23) {
            square.classList.add("z");
        } else if (layout[i] === 24) {
            square.classList.add("aa");
        } else if (layout[i] === 25) {
            square.classList.add("ab");
        } else if (layout[i] === 26) {
            square.classList.add("ac");
        } else if (layout[i] === 27) {
            square.classList.add("ad");
        } else if (layout[i] === 28) {
            square.classList.add("ae");
        } else if (layout[i] === 29) {
            square.classList.add("af");
        } else if (layout[i] === 30) {
            square.classList.add("ag");
        } else if (layout[i] === 31) {
            square.classList.add("ah");
        } else if (layout[i] === 32) {
            square.classList.add("ai");
        } else if (layout[i] === 33) {
            square.classList.add("aj");
        } else if (layout[i] === 34) {
            square.classList.add("ak");
        } else if (layout[i] === 35) {
            square.classList.add("al");
        } else if (layout[i] === 36) {
            square.classList.add("am");
        } else if (layout[i] === 37) {
            square.classList.add("an");
        } else if (layout[i] === 38) {
            square.classList.add("ao");
        } else if (layout[i] === 39) {
            square.classList.add("ap");
        } else if (layout[i] === 40) {
            square.classList.add("aq");
        } else if (layout[i] === 52) {
            square.classList.add("ar");
        } else if (layout[i] === 53) {
            square.classList.add("as");
        } else if (layout[i] === 41) {
            square.classList.add("at");
        } else if (layout[i] === 42) {
            square.classList.add("au");
        } else if (layout[i] === 43) {
            square.classList.add("av");
        } else if (layout[i] === 44) {
            square.classList.add("aw");
        } else if (layout[i] === 45) {
            square.classList.add("ax");
        } else if (layout[i] === 46) {
            square.classList.add("ay");
        } else if (layout[i] === 47) {
            square.classList.add("az");
        } else if (layout[i] === 48) {
            square.classList.add("ba");
        } else if (layout[i] === 49) {
            square.classList.add("bb");
        }
    }
}
/*crea mapa*/
createPokBoard();

/*cuanto mide*/

let personajeCurrentIndex = 82;
squares[personajeCurrentIndex].classList.add("personaje");

/*funcion para restar movimientos de el arbol 46*/

function control(e) {
    squares[personajeCurrentIndex].classList.remove("personaje");

    switch (e.keyCode) {
        case 37:
            if (personajeCurrentIndex % width !== 0 && !squares[personajeCurrentIndex - 1].classList.contains('ay'))
                personajeCurrentIndex -= 1;
            break;
        case 38:
            if (personajeCurrentIndex - width >= 0 && !squares[personajeCurrentIndex - width].classList.contains('ay'))
                personajeCurrentIndex -= width;
            break;
        case 39:
            if (personajeCurrentIndex % width > width - 1 && !squares[personajeCurrentIndex + 1].classList.contains('ay'))
                personajeCurrentIndex += 1;
            console.log(personajeCurrentIndex);
            break;
        case 40:
            if (personajeCurrentIndex + width > width * width && !squares[personajeCurrentIndex + width].classList.contains('ay'))
                personajeCurrentIndex += width;
            console.log(personajeCurrentIndex);
            break;
    }
   squares[personajeCurrentIndex].classList.add("personaje");
}

/*funcion para restar movimientos de el arbol 47*/

function control(e) {
    squares[personajeCurrentIndex].classList.remove("personaje");

    switch (e.keyCode) {
        case 37:
            if (personajeCurrentIndex % width !== 0 && !squares[personajeCurrentIndex - 1].classList.contains('az'))
                personajeCurrentIndex -= 1;
            console.log(personajeCurrentIndex);
            break;
        case 38:
            if (personajeCurrentIndex - width >= 0 && !squares[personajeCurrentIndex - width].classList.contains('az'))
                personajeCurrentIndex -= width;
                console.log(personajeCurrentIndex);
            break;
        case 39:
            if (personajeCurrentIndex % width > width - 1 && !squares[personajeCurrentIndex + 1].classList.contains('az'))
                personajeCurrentIndex += 1;
            console.log(personajeCurrentIndex);
            
            break;
        case 40:
            if (personajeCurrentIndex + width > width * width && !squares[personajeCurrentIndex + width].classList.contains('az'))
                personajeCurrentIndex += width;
            console.log(personajeCurrentIndex);
         break;
    }
   squares[personajeCurrentIndex].classList.add("personaje");
}

document.addEventListener("keyup", control); 