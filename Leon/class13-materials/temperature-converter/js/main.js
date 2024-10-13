//Write your pseduo code first! 

// I need to convert temperature from C to F. 

// I need a way to display the change in the DOM. 
document.querySelector('#yell').addEventListener('click', convert)

function convert() {

    //Need the valus of Cel 
    let temp = document.querySelector('#cel').value
    //convert cel to farhn
    temp = temp * 9/5 + 32
    //show it
    document.querySelector('#placeToYell').innerText = temp
  }
