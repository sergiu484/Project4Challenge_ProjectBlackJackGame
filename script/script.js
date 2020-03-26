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

//Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoise){
    //console.log(yourChoise);
    var humanChoise, botChoise;
    //humanChoise = yourChoise.id;
    botChoise = numberToChoise(randomToRpsInt());
    alert(botChoise);
    //results = decideWinner(humanChoise, botChoise); //[0, 1] human lost | bot win
    //message = finalMessage(results); // { 'message': 'you won', 'color': 'green'}
    //rpsFrontEnd(yourChoise.id, botChoise, message);

}

function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoise(number){
    return ['rock', 'paper', 'scissors'][number];
}