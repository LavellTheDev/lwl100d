//Write your pseduo code first! 
//I need to know the conversion from F to C
//I need to convert F to C
//I need a place to input F or C numbers
//I need a place to display the answer


document.querySelector('#yell').addEventListener('click', temp)

function temp() {

  let farhnheit = document.querySelector('#tempF').value

  farhnheit = farhnheit * 9/5 + 32;

  //Add what you should be doing - conditionals go here
  document.querySelector('#placeToYell').innerText = `${farhnheit}`
}
