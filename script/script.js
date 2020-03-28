/* ********************************************************************************************************** */
//Chanllenge 1: You Age in Days

function ageInDays(){
    var birthYear = prompt('What year are you born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days');
    h1.setAttribute('id','ageIdDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-rezult').appendChild(h1);
}

function reset() {
    document.getElementById('ageIdDays').remove();
}
/* ********************************************************************************************************** */
//Challenge 2: Cat Generator
function generateSmile(){
    var image1 = document.createElement('img');
    var image2 = document.createElement('img');
    var div = document.getElementById('flex-smile-gen');
    image1.src = "./img/tenor.gif";
    image2.src = "./img/smile.gif";
    div.append(image1);
    div.append(image2);
}
function resetAllSmile() {
    document.getElementById('flex-smile-gen').remove();
}
/* ********************************************************************************************************** */
//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoise){
    //console.log(yourChoise);
    var humanChoise, botChoise;
    humanChoise = yourChoise.id;

    botChoise = numberToChoise(randomToRpsInt());
    console.log('ComputerChoise: ',botChoise);

    results = decideWinner(humanChoise, botChoise); //[0, 1] human lost | bot win
    console.log(results);

    message = finalMessage(results); // { 'message': 'you won', 'color': 'green'}
    console.log(message);
    //console.log(message.color);

    rpsFrontEnd(yourChoise.id, botChoise, message);

}
function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoise(number){
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoise,computerChoise){
    var rpsDatabase ={
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    }
    var yourScore = rpsDatabase[yourChoise][computerChoise];
    var computerScore = rpsDatabase[computerChoise][yourChoise];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {"message": "You lost!","color":"red"}
    }
    else if(yourScore === 1){
        return {"message": "You won!", "color":"green"}
    }
    else if (yourScore === 0.5){
        return {"message": "You tired!","color":"yellow"}
    }
}

function rpsFrontEnd(humanImageChoise,botImageChoise,finalMessage){
    var imagesDataBase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src
    }
    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoise] + "' width='250px' height='200px' style='box-shadow:0px 10px 50px rgba(37, 50, 233, 1)' >"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage.color + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoise] + "' width='250px' height='200px' style='box-shadow:0px 10px 50px rgba(243, 38, 24, 1)' >"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

/* ********************************************************************************************************** */
// Challenge 4: Change the color of all the buttons
 var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

 var copyAllButtons = [];
 for (let i = 0; i < all_buttons.length; i++){
     copyAllButtons.push(all_buttons[i].classList[1]);
 }

 //console.log(copyAllButtons);

 function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red'){
        buttonRed();
    }else if(buttonThingy.value === 'green'){
        buttonGreen();
    }else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }else if(buttonThingy.value === 'random'){
        randomColors();
    }
 }

 function buttonRed(){
     for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
     }
 }
 function buttonGreen(){
    for(let i = 0; i < all_buttons.length; i++){
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    var choices = ['btn-danger','btn-primary','btn-success','btn-warning'];
    for(let i = 0;i < all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
/* ********************************************************************************************************** */
/* Challeange 5: BlackJack*/
let blackjackGame = {
    'you': {'scoreSpan':'your-blackJack-result','div':'#your-box','score':0},
    'dealer': {'scoreSpan':'dealer-blackJack-result','div':'#dealer-box','score':0},
    'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':2,'Q':3,'K':4,'A':[1, 11]}
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('blackjacksounds/swish.m4a');
const standSound = new Audio('blackjacksounds/aww.mp3');
const dealSound = new Audio('blackjacksounds/cash.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackStand);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit(){
    let card = randomCard();
    console.log(card);
    showCard(card,YOU);
    updateScore(card,YOU);
    console.log(YOU['score']);
    showScore(YOU);

}
function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}
function showCard(card,activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `blackjackimages/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play(); 
    }
}
function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i = 0; i < yourImages.length; i++){
        yourImages[i].remove();
    }
    for(let i = 0; i < dealerImages.length; i++){
        dealerImages[i].remove();
    }
    YOU['score'] = 0;
    DEALER['score'] = 0;
   // console.log(YOU['score']);

    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#your-blackjack-result").style.color = 'white';
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").style.color = 'white';
    dealSound.play();
}

function updateScore(card, activePlayer){
    if(card === 'A'){
    // if adding 11 keeps me below 21, add 11. Otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } 
        else
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}
function showScore(activePlayer){
    if(activePlayer == YOU){
        if(activePlayer['score'] > 21){
            document.querySelector("#your-blackjack-result").textContent = 'BUST';
            document.querySelector("#your-blackjack-result").style.color = 'red';            
        }else{
            document.querySelector("#your-blackjack-result").textContent = activePlayer['score'];
        }
    }
    else if(activePlayer == DEALER){
        if(activePlayer['score'] > 21){
            document.querySelector("#dealer-blackjack-result").textContent = 'BUST';
            document.querySelector("#dealer-blackjack-result").style.color = 'red';
        }else{
            document.querySelector("#dealer-blackjack-result").textContent = activePlayer['score'];
        }
    }
}

function blackjackStand(){
    //  alert("Charles click the Stand button");
      standSound.play();
  }
