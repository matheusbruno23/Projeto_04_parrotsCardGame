const cards = [];
const carttype =[];
let ncards;

let i = 0;

function embaralhar() { 
	return Math.random() - 0.5; 
}

/*2*/function naosei(){
    for(let i = 0; i < (ncards/2) ; i++ ){
        let card = carttype[i];
        cards.push(card);
        cards.push(card);
    }
    cards.sort(embaralhar);

    displayCards()
}


/*1*/ function askForCards(){
    ncards = Number(prompt('Jogo da memória! Selecione a quantidade de cartas abaixo! (Lembrete: mínimo 4 e máximo de 14 cartas, BOM JOGO!'));
    while(invalidNumberOfCards()){
        alert('Número inválido de cartas, por favor selecione novamente um número par á partir de 4 até 14!');
        ncards = Number(prompt('Jogo da memória! Selecione a quantidade de cartas abaixo! (Lembrete: mínimo 4 e máximo de 14 cartas, BOM JOGO!'));
    }
    naosei();
}

function invalidNumberOfCards(){
    if ( (ncards < 4 ||   ncards > 14 || ncards % 2 !== 0) || isNaN(ncards)) {
        return true;
    }else{
        return false;
    }
}

/*3*/function displayCards(){
    const board = document.querySelector('ul')
    for(let i = 0; i < cards.length; i++){
    let card = `
    <li class="card" onclick="selectCard(this)">
        <div class="face front">
            <img src="./Arquivos U╠üteis - Projeto 04 - Parrot Card Game/back.png">
        </div>
        <div class="face back">
            <img src="./Arquivos U╠üteis - Projeto 04 - Parrot Card Game/back.png">
        </div>
    </li>
    `
    board.innerHTML += card;
    }
    
}
askForCards()
