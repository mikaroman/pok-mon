//const width= 28;
const height=17
const width= 23
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
    46,48,46,44,8,9,45,39,39,39,41,12,1,8,9,45,39,39,39,41,12,1,7,
    47,49,47,44,7,10,38,39,39,39,40,11,1,7,10,38,39,39,39,40,11,1,7,
    46,48,46,44,7,10,37,36,35,34,33,11,1,7,10,37,36,35,34,33,11,1,7,
    47,49,47,44,7,19,28,29,30,31,32,11,1,7,19,28,29,30,31,32,11,1,7,
    46,48,46,44,21,20,27,26,25,24,23,22,1,21,20,27,26,25,24,23,22,1,7,
    47,49,47,44,3,2,4,1,3,2,2,4,1,3,2,4,1,3,2,2,4,1,7,
    46,48,46,44,1,1,1,1,1,1,1,1,1,5,52,54,54,54,54,55,56,57,7,
    47,49,47,44,1,5,16,16,16,50,15,14,1,6,53,58,58,58,58,59,60,61,7,
    46,48,46,44,1,6,17,17,17,51,0,13,1,7,42,62,62,62,62,63,64,65,7,
    47,49,47,44,1,7,18,18,18,18,10,11,1,7,43,66,67,68,69,70,71,72,7,
    46,48,46,44,1,7,18,18,18,18,10,11,1,7,73,74,75,76,77,78,79,799,7,
    47,49,47,44,1,7,80,10,10,10,10,11,1,81,82,82,83,1,1,82,82,1,7,

    46,48,46,44,1,995,86,86,86,86,86,87,1,88,90,90,90,90,90,89,91,1,7,

    47,49,47,44,1,1,1,1,93,92,92,94,1,888,96,96,96,97,96,98,99,1,7,
    46,48,46,100,101,101,101,101,999,103,103,104,16,16,16,16,16,16,16,16,16,1,7,

    47,49,47,10,10,10,10,10,102,105,105,898,17,17,17,17,17,17,17,17,17,1,7,
    46,48,46,108,109,108,109,10,102,105,105,898,18,18,18,18,18,18,18,18,18,1,7,
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
        } else if (layout[i] === 54) {
            square.classList.add("bc");
        } else if (layout[i] === 55) {
            square.classList.add("bd");
        } else if (layout[i] === 56) {
            square.classList.add("be");
        } else if (layout[i] === 57) {
            square.classList.add("bf");
        } else if (layout[i] === 58) {
            square.classList.add("bg");
        } else if (layout[i] === 59) {
            square.classList.add("bh");
        } else if (layout[i] === 60) {
            square.classList.add("bi");
        } else if (layout[i] === 61) {
            square.classList.add("bj");
        } else if (layout[i] === 62) {
            square.classList.add("bk");
        } else if (layout[i] === 63) {
            square.classList.add("bl");
        } else if (layout[i] === 64) {
            square.classList.add("bm");
        } else if (layout[i] === 65) {
            square.classList.add("bn");
        } else if (layout[i] === 66) {
            square.classList.add("bo");
        } else if (layout[i] === 67) {
            square.classList.add("bp");
        } else if (layout[i] === 68) {
            square.classList.add("bq");
        } else if (layout[i] === 69) {
            square.classList.add("br");
        } else if (layout[i] === 70) {
            square.classList.add("bs");
        } else if (layout[i] === 71) {
            square.classList.add("bt");
        } else if (layout[i] === 72) {
            square.classList.add("bu");
        } else if (layout[i] === 73) {
            square.classList.add("bv");
        } else if (layout[i] === 74) {
            square.classList.add("bw");
        } else if (layout[i] === 75) {
            square.classList.add("bx");
        } else if (layout[i] === 76) {
            square.classList.add("by");
        } else if (layout[i] === 77) {
            square.classList.add("bz");
        } else if (layout[i] === 78) {
            square.classList.add("ca");
        } else if (layout[i] === 79) {
            square.classList.add("cb");
        } else if (layout[i] === 799) {
            square.classList.add("cbb");
        } else if (layout[i] === 80) {
            square.classList.add("cc");
        } else if (layout[i] === 81) {
            square.classList.add("cd");
        } else if (layout[i] === 82) {
            square.classList.add("ce");
        } else if (layout[i] === 83) {
            square.classList.add("cf");
        } else if (layout[i] === 844) {
            square.classList.add("cg");
        } else if (layout[i] === 85) {
            square.classList.add("ch");
        } else if (layout[i] === 86) {
            square.classList.add("ci");
        } else if (layout[i] === 87) {
            square.classList.add("cj");
        } else if (layout[i] === 88) {
            square.classList.add("ck");
        } else if (layout[i] === 89) {
            square.classList.add("cl");
        } else if (layout[i] === 90) {
            square.classList.add("cm");
        } else if (layout[i] === 91) {
            square.classList.add("cn");
        } else if (layout[i] === 92) {
            square.classList.add("co");
        } else if (layout[i] === 93) {
            square.classList.add("cp");
        } else if (layout[i] === 94) {
            square.classList.add("cq");
        } else if (layout[i] === 995) {
            square.classList.add("cr");
        } else if (layout[i] === 96) {
            square.classList.add("cs");
        } else if (layout[i] === 97) {
            square.classList.add("ct");
        } else if (layout[i] === 98) {
            square.classList.add("cu");
        } else if (layout[i] === 99) {
            square.classList.add("cv");
        } else if (layout[i] === 100) {
            square.classList.add("cw");
        } else if (layout[i] === 101) {
            square.classList.add("cx");
        } else if (layout[i] === 102) {
            square.classList.add("cy");
        } else if (layout[i] === 103) {
            square.classList.add("cz");
        } else if (layout[i] === 104) {
            square.classList.add("da");
        } else if (layout[i] === 105) {
            square.classList.add("db");
        } else if (layout[i] === 106) {
            square.classList.add("dc");
        } else if (layout[i] === 107) {
            square.classList.add("dd");
        } else if (layout[i] === 108) {
            square.classList.add("de");
        } else if (layout[i] === 109) {
            square.classList.add("df");
        } else if (layout[i] === 110) {
            square.classList.add("dg");
        } else if (layout[i] === 122) {
            square.classList.add("dh");
        } else if (layout[i] === 999) {
            square.classList.add("cii");
        } else if (layout[i] === 888) {
            square.classList.add("cjj");
        } else if (layout[i] === 898){
            square.classList.add("zz");
        }
    }
}
/*crea mapa*/
createPokBoard();

/*cuanto mide*/

let personajeCurrentIndex =129;
squares[personajeCurrentIndex].classList.add("personaje");

/*funcion para restar movimientos de el arbol 46*/

function control(e) {
    squares[personajeCurrentIndex].classList.remove("personaje");

    switch (e.keyCode) {
        case 37:
            if (personajeCurrentIndex % width !== 0 && !squares[personajeCurrentIndex - 1].classList.contains('ay'))
                personajeCurrentIndex -= 1;
                console.log(personajeCurrentIndex);
            break;
        case 38:
            if (personajeCurrentIndex - width >= 0 && !squares[personajeCurrentIndex - width].classList.contains('ay'))
                personajeCurrentIndex -= width;
                console.log(personajeCurrentIndex);
            break;
        case 39:
            if (personajeCurrentIndex % width < width - 1 && !squares[personajeCurrentIndex + 1].classList.contains('ay'))
                personajeCurrentIndex += 1;
            console.log(personajeCurrentIndex);
            break;
        case 40:
            if (personajeCurrentIndex + width < width * width && !squares[personajeCurrentIndex + width].classList.contains('ay'))
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
            if (personajeCurrentIndex % width < width - 1 && !squares[personajeCurrentIndex + 1].classList.contains('az'))
                personajeCurrentIndex += 1;
            console.log(personajeCurrentIndex);
            
            break;
        case 40:
            if (personajeCurrentIndex + width < width * width && !squares[personajeCurrentIndex + width].classList.contains('az'))
                personajeCurrentIndex += width;
            console.log(personajeCurrentIndex);
         break;
    }
   squares[personajeCurrentIndex].classList.add("personaje");
}

document.addEventListener("keyup", control); 

function toggle() {
    var grid= document.querySelector(".grid");
    var grid2 = document.querySelector("grid2");

    if (grid.style.display === 'none') {
        grid.style.display = 'block';
        grid2.style.display = 'none';
    } else {
        grid.style.display = 'none';
        grid2.style.display = 'block';
    }
}