// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
// document.querySelector("#minusThree").addEventListener('click', sub3)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub3() {
//   total = total - 3
//   document.querySelector('#placeToPutResult').innerHTML = total
// }



let total = 0

document.getElementById('pumpkin').onclick = makeZero
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', stripes)
document.getElementById('cantThinkOfAnything').onclick = cantThink
document.querySelector('#minusThree').addEventListener('click', removeThree)

function makeZero (){
  total = 0
  document.querySelector('#placeToPutResult').innerHTML = total
}

function jumanji (){
  total += 3
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function stripes(){
  total += 9 
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function cantThink(){
  total -= 2 
  document.querySelector('#placeToPutResult').innerHTML = total;
}

function removeThree(){
  total -= 3 
  document.querySelector('#placeToPutResult').innerHTML = total;
}