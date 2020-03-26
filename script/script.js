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