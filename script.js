const parametri = new URLSearchParams(window.location.search);
const difficoltà = parametri.get('difficulty')
let grandezzaMatrice = 0;

if (difficoltà === 'easy') {
    grandezzaMatrice = 5;
}
else if (difficoltà === 'medium') {
    grandezzaMatrice = 7;
}
else {
    grandezzaMatrice = 10;
}

function creaMatrice(grandezzaMatrice) {
    let matrice = new Array();
    for (let i = 0; i < grandezzaMatrice; i++) {
        matrice[i] = new Array();
        for (let j = 0; j < grandezzaMatrice; j++) {
            let casella = document.createElement("div");
            casella.setAttribute('class', 'casella');
            matrice[i][j] = casella; 
            document.body.appendChild(matrice[i][j]);
            let x = (i * 55) + 130;
            let y = (j * 55) + 10;
            matrice[i][j].style.top = x + "px"; 
            matrice[i][j].style.left = y + "px";
            matrice[i][j].style.position = "absolute";
        }
    }
}

document.addEventListener("DOMContentLoaded", () => creaMatrice(grandezzaMatrice));