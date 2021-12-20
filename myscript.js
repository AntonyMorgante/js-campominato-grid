/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

function fetchDifficulty(){
    const difficulty= document.getElementById("difficulty").value;
    return difficulty;
}

function genField(n){
    let field = document.getElementById("play-field");
    field.innerHTML = "";
    for (let i=0; i<n;i++){
        field.innerHTML += `<div class="row"></div>`;
        let row = document.querySelectorAll(".row")[i];
        for (let j=0; j<n;j++){
            row.innerHTML += `<div class="square" onclick="clickColor(event)">` + (i*n + j +1) + `</div>`;
        }
    }
}

function genBoard(difficulty){
    console.log(difficulty)
    console.log(difficulty == 1)
    if (difficulty == 1){
        genField(10);
    }
    else if (difficulty == 2){
        genField(9);
    }
    else if (difficulty == 3){
        genField(7);
    }
}

function createGame(){
    genBoard(fetchDifficulty());  
}

function clickColor(event){
    event.target.classList.add("click-color");
}