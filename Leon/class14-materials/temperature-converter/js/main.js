//Write your pseduo code first! 
//I need to know the conversion from F to C
//I need to convert F to C
//I need a place to input F or C numbers
//I need a place to display the answer


//I need to figure out what is causing only one to appear
//I need to figure out how to allow only one at a time.

document.querySelector('#yell').addEventListener('click', temp)
document.querySelector('#yell').addEventListener('click', tempCel)




function tempCel() {

  let celcius = document.querySelector('#tempC').value

  celcius = (celcius * 9/5) + 32;


  //Add what you should be doing - conditionals go here
  document.querySelector('#placeToYellTwo').innerText = `${celcius}`
}

function temp() {

  let farhnheit = document.querySelector('#tempF').value
  farhnheit = (farhnheit - 32) * 5/9;

  //Add what you should be doing - conditionals go here
  document.querySelector('#placeToYell').innerText = `${farhnheit}`
}
