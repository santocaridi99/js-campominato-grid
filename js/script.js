/*
L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/
//funzione per creare i  quadratini (quando li clicco si colorano di azzurro)
function createBox(containerBox , numero){
    const newBox = document.createElement('div')
    newBox.className = 'box';
    containerBox.append(newBox);
    newBox.addEventListener('click',function(){
        this.classList.add('azzurro');
        newBox.innerText=numero;
    })
}
//dichiaro variabili dei bottoni per scelta del livello
const button1 = document.getElementById('lvl-1');
const button2 = document.getElementById('lvl-2');
const button3 = document.getElementById('lvl-3');
//dichiaro container
const container = document.querySelector('.container');
//se utente sceglierà livello 1
//genera numeri da 1 a 100
//aggiungi classe container in modo tale che entrano 100 quadratini
button1.addEventListener('click',function(){
    container.innerHTML='';
    container.classList.add('easy-container');
    container.classList.remove('medium-container');
    container.classList.remove('hard-container');
    for(let i=1 ; i <= 100 ; i++){
        createBox(container , i)
    }
})
//se utente sceglie livello 2 
//genera numeri  da 1 a 81
//aggiungi classe container in modo tale che entrano 81 quadratini
button2.addEventListener('click',function(){
    container.innerHTML='';
    container.classList.add('medium-container');
    container.classList.remove('hard-container');
    container.classList.remove('easy-container');
    for(let i=1 ; i <= 81 ; i++){
        createBox(container , i)
    }
})
//se utente sceglie livello 3
//genera numeri  da 1 a 49
//aggiungi classe container in modo tale che entrano 49 quadratini
button3.addEventListener('click',function(){
    container.innerHTML='';
    container.classList.add('hard-container');
    container.classList.remove('medium-container');
    container.classList.remove('easy-container');
    for(let i=1 ; i <= 49 ; i++){
        createBox(container , i)
    }
})