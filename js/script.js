/*
    i = 0;

    if (i < 100) {
        si esegue tutto il blocco di istruzioni
        i = i + 1
        si ritorna a if
    }


    ESEMPIO 

    1) i = 0;  in console si ha 0
    2) i = 1;  in console si ha 1
    3) i = 2;  in console si ha 2
    4) i = 3;  in console si ha Fizz
    5) i = 4;  in console si ha 4
    6) i = 5;  in console si ha Buzz

    se numero % 3 = 0 
    allora stampa fizz 

    se numero % 5 = 0
    allora stampa buzz

    se nemero % 3 e numero % 5 = 0
    allora stampa FizzBuzz
*/


const eleGrid = document.querySelector('.grid');

for (let i = 1; i <= 100; i = i + 1) {

    if (i % 3 == 0 && i % 5 == 0 ) {
        console.log('FizzBuzz');
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell-fizz-buzz">FizzBuzz</div>`;
    } else if (i % 3 == 0) {
        console.log('Fizz');
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell-fizz">Fizz</div>`;
    } else if (i % 5 == 0) {
        console.log('Buzz');
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell-buzz">Buzz</div>`;
    } else {
        console.log(i);
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    }
}