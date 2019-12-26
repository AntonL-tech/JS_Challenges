//alert('hi');
function ageInDays() {
    var birthYear = +prompt('when were you born?');
    var age = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + age + ' days old');
    h1.setAttribute('id', 'age');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('age').remove();
}

function generateCat() {
    var cat_item = document.createElement('div');
    var image = document.createElement('img');
    var gang = document.getElementById('cat-gang');
    image.src = "./images/tenor.gif";
    cat_item.setAttribute('class', 'cat__item');
    cat_item.setAttribute('id', 'cat__cont');
    image.setAttribute('class', 'cat__photo');
    image.setAttribute('id', 'cat__id');

    cat_item.appendChild(image);
    gang.appendChild(cat_item);
}

function resetCat() {
    document.getElementById('cat__id').remove();
    document.getElementById('cat__cont').remove();
}


/*
function rpsGame(yourChoice) {

    var compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0 :
            compChoice = 'rock';
            break;
        case 1 :
            compChoice = 'paper';
            break;
        case 2 :
            compChoice = 'scissor';
            break;
    };
    console.log(compChoice);
    if ((yourChoice.id === 'rock' && compChoice === 'rock') || (yourChoice.id === 'paper' && compChoice === 'paper')
    || (yourChoice.id === 'scissor' && compChoice === 'scissor')) {
        var res = document.createElement('h3');
        var div = document.createElement("div");
        div.setAttribute('class', 'game__item');
        div.appendChild(res);
        document.getElementById('game').appendChild(div);
        console.log('Draw');
    }
    else if((yourChoice.id === 'rock' && compChoice === 'scissor') || (yourChoice.id === 'paper' && compChoice === 'rock')
        || (yourChoice.id === 'scissor' && compChoice === 'paper')) {
        console.log('You Win');
    }
    else {
        console.log('You Lost');
    }
}*/

// Challenge 3 Rock Paper Scissor
function rpsGame(yourChoice) {
    var humanChoice = yourChoice.id;
    console.log(humanChoice);
    var botChoice = numberToChoice(randomRpsToInt());
    console.log(botChoice);
    var results = decideWinner(humanChoice, botChoice); // array [0,1] human LOst
    console.log(results);
    var message = finalMessage(results); //{ message : 'You Won!' , color : green}
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
    console.log(yourChoice.src);
}

function randomRpsToInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var dataBase = {
        'rock' : { 'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
        'paper' : { 'rock' : 1, 'paper' : 0.5, 'scissors' : 0},
        'scissors' : { 'paper' : 1, 'scissors' : 0.5, 'rock' : 0},
    };
    var yourScore = dataBase[yourChoice][computerChoice];
    var computerScore = dataBase[computerChoice][yourChoice];

    return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message' : 'You Lost!', 'color' : 'red'};
    } else if (yourScore === 0.5) {
        return {'message' : 'You tied!', 'color' : 'yellow'};
    } else {
        return {'message' : 'You Won!', 'color' : 'green'};
    }
}
function rpsFrontEnd(yourImageChoice, botImageChoice, finalMessage) {
    const ImageBase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src,
    };

    // remove all imgs
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var textDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + ImageBase[yourImageChoice] + "' width='150px' height='150px' style='box-shadow: 0 0 50px blue'>";
    textDiv.innerHTML = "<h1 style='color : " + finalMessage['color'] + "; font-size: 60px; padding: 30px'> "+ finalMessage['message'] +  "</h1>"
    botDiv.innerHTML = "<img src='" + ImageBase[botImageChoice] + "' width='150px' height='150px' style='box-shadow: 0 0 50px red'>";
    document.getElementById('game').appendChild(humanDiv);
    document.getElementById('game').appendChild(textDiv);
    document.getElementById('game').appendChild(botDiv);
}

// Challenge 4 :
var all__buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i = 0; i < all__buttons.length; i++) {
    copyAllButtons.push(all__buttons[i].classList[1]);
}

function buttonColorChange(selectCol) {
    switch (selectCol.value) {
        case 'green' :
            greenButtons();
            break;
        case 'red' :
            redButtons();
            break;
        case 'yellow' :
            yellowButtons();
            break;
        case 'blue' :
            blueButtons();
            break;
        case 'reset' :
            resetButtons();
            break;
        case 'random' :
            randomButtons();
            break;
    }
}

function greenButtons() {
    for (let i = 0; i < all__buttons.length; i++) {
        all__buttons[i].classList.remove(all__buttons[i].classList[1]);
        all__buttons[i].classList.add('btn-success');
  }
}
function redButtons() {
    for (let i = 0; i < all__buttons.length; i++) {
        all__buttons[i].classList.remove(all__buttons[i].classList[1]);
        all__buttons[i].classList.add('btn-danger');
    }
}
function yellowButtons() {
    for (let i = 0; i < all__buttons.length; i++) {
        all__buttons[i].classList.remove(all__buttons[i].classList[1]);
        all__buttons[i].classList.add('btn-warning');
    }
}
function blueButtons() {
    for (let i = 0; i < all__buttons.length; i++) {
        all__buttons[i].classList.remove(all__buttons[i].classList[1]);
        all__buttons[i].classList.add('btn-primary');
    }
}
function resetButtons() {
    for (let i = 0; i < all__buttons.length; i++) {
        all__buttons[i].classList.remove(all__buttons[i].classList[1]);
        all__buttons[i].classList.add(copyAllButtons[i]);

    }
}

function randomToInt() {
    return Math.floor(Math.random() * 4);
}
function numberToColor(number) {
    return ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'][number];
}

function randomButtons() {
    for (let i = 0; i < all__buttons.length; i++) {
        all__buttons[i].classList.remove(all__buttons[i].classList[1]);
        all__buttons[i].classList.add(numberToColor(randomToInt()));
    }
}





//************************
//Challenge 5: Blackjack

let blackjackGame = {
    'you' : {'scoreSpan' : '#your-blackjack-result', 'div': '#your-box', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-blackjack-result', 'div': '#dealer-box', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'A', 'Q'],
    'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'A': [1,11], 'Q': 10},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('./sounds/swish.m4a');
const lossSound = new Audio('./sounds/aww.mp3');
const winSound = new Audio('./sounds/cash.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card,YOU);
        updateScore(card,YOU);
        showScore(YOU);
    }
}

function showCard(card,activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.setAttribute('class', 'blackjack_card');
        cardImage.src = `./images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function randomCard() {
    let randomIndex =  Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}


function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = '0';
        document.querySelector('#your-blackjack-result').style.color = '#fff';

        document.querySelector('#dealer-blackjack-result').textContent = '0';
        document.querySelector('#dealer-blackjack-result').style.color = '#fff';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";
        blackjackGame['isStand'] = false;
        blackjackGame['turnsOver'] = false;
    }
}


function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'ARE BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;
    while (DEALER['score'] < 17 && blackjackGame['isStand'] === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(800);
    }
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

// compute Winner and return who won

function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            blackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }

    console.log('Winner is', winner);
    return winner;
}

function showResult(winner) {
    let message;
    let messageColor;

    if (blackjackGame['turnsOver'] === true) {
        if (winner === YOU) {
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
            document.querySelector('#wins').textContent = blackjackGame['wins'];
        } else if (winner === DEALER) {
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
            document.querySelector('#losses').textContent = blackjackGame['losses'];
        } else  {
            message = 'You drew!';
            messageColor = 'black';
            document.querySelector('#draws').textContent = blackjackGame['draws'];
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}












