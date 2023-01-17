//variaveis globais
//variável pra saber qual foi a primeira carta selecionada - comparar as duas cartas para virar e desvirar
let firstCard;
let secondCard;

//variáveis de números de jogadas
let clickedCard = 0;
let rightCard = 0;

// numero de cartas colocado no prompt pelo usuario
let ncards;
//arrays
//array do baralho e array que seleciona o gif que estará por trás das cartas no baralho
const cards = [];
const carttype =[
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];
//funções
// embaralhador
function shuffle() { 
	return Math.random() - 0.5; 
}
// pergunta o número de cartas que o usuário deseja jogar
function askForCards(){
    ncards = Number(prompt('Jogo da memória! Selecione a ,uantidade de cartas abaixo! (Lembrete: mínimo 4 e máximo de 14 cartas, BOM JOGO!'));
    while(invalidNumberOfCards()){
        alert('Número inválido de cartas, por favor selecione novamente um número par á partir de 4 até 14!');
        ncards = Number(prompt('Jogo da memória! Selecione a quantidade de cartas abaixo! (Lembrete: mínimo 4 e máximo de 14 cartas, BOM JOGO!'));
    }
    duplicateCards();
}
// confirma se o número coloca fica entre 4-14, seja um número e seja par
function invalidNumberOfCards(){
    if ( (ncards < 4 ||   ncards > 14 || ncards % 2 !== 0) || isNaN(ncards)) {
        return true;
    }else{
        return false;
    }
}
// pega a array do baralho e duplica as imagens com gifs - ativa a função que renderiza as cartas na tela
function duplicateCards(){
    for(let i = 0; i < (ncards/2) ; i++ ){
        let card = carttype[i];
        cards.push(card);
        cards.push(card);
    }
    cards.sort(shuffle);

    displayCards()
}
// renderiza as cartas na tela
function displayCards(){
    const board = document.querySelector('ul')
    for(let i = 0; i < cards.length; i++){
    let card = `
    <li class="card" onclick="selectCard(this)">
        <div class="face front">
            <img src="./images/${cards[i]}.gif">
        </div>
        <div class="face back">
            <img src="./images/back.png">
        </div>
    </li>
    `
    board.innerHTML += card;
    }
    
}
//selecionar cartas

//desvirar as cartas diferentes após resetar
function unturnCards(){
    firstCard.classList.remove('turn');
    secondCard.classList.remove('turn');
    resetAtt();
}
//resetar atributos das variaveis

function resetAtt(){
    firstCard = undefined;
    secondCard = undefined;
}
// seleciona a carta e vira a face dela para cima.
function selectCard(turnedCard){
    if (turnedCard.classList.contains('turn')){
        return;
    } if(firstCard !== undefined && secondCard !== undefined){
        return
    }
        turnedCard.classList.add('turn');
        clickedCard++;

            if (firstCard === undefined){
               firstCard = turnedCard
                
            } else{
                if (secondCard === undefined){
                secondCard = turnedCard
                
                if(firstCard.innerHTML === secondCard.innerHTML){

                    resetAtt();
                    rightCard += 2;
                    endGame();

                    } else {
                    setTimeout(unturnCards, 800)
                }
            }
        }
}

//encerra o jogo e coloca um alert

function endGame(){
    if (rightCard === cards.length){
        alert(`Jogo de ${Number(cards.length)} cartas, Finalizado em ${clickedCard} jogadas!`);
        console.log(rightCard);
    }
}


askForCards();