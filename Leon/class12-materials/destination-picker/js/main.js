
document.getElementById('thailand').onclick = thailandPurple;
document.getElementById('germany').onclick = germanBlue;
document.getElementById('china').onclick = chinaRed;
document.getElementById('japan').onclick = japanGreen;

function thailandPurple(){
    document.querySelector('body').style.backgroundImage = "url('/destination-picker/img/thai.png')";
}

function germanBlue(){
    document.querySelector('body').style.backgroundImage = "url('/destination-picker/img/germany.png')";
}

function chinaRed(){
    document.querySelector('body').style.backgroundImage = "url('/destination-picker/img/china.png')";
}

function japanGreen(){
    document.querySelector('body').style.backgroundImage = "url('/destination-picker/img/japan.png')";
}