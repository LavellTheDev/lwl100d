
document.getElementById('purple').onclick = partyPurple;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('red').onclick = partyRed;
document.getElementById('green').onclick = partyGreen;

function partyPurple(){
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
}

function partyBlue(){
    document.querySelector('body').style.backgroundColor = 'rgb(35, 162, 241)'
}

function partyRed(){
    document.querySelector('body').style.backgroundColor = 'rgba(250, 0, 0, 1)'
}

function partyGreen(){
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
}