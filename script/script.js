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