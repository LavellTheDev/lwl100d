// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value
 
//   //Conditionals go here
//  if (day === "Tuesday" || day === "Thursday") {
//   alert('Class Day');
//  } else if (day === "Monday" || day === "Wednesday") {
//   alert('Boring');
//  } else {
//   alert('Weekend');
//  }
// }


// document.querySelector('#check').addEventListener('click', check)

// function check() {
//   const day = document.querySelector('#day').value;

//   if (day === "Tuesday" || day === "Thursday") {
//     alert('Class Day');
//   } else if (day === "Saturday" || day === "Sunday") {
//     alert('Weekend!');
//   }else{
//     alert('Boring');
//   }

// }

document.querySelector('#check').addEventListener('click', check);

function check(){
  const day = document.querySelector('#day').value;

  if (day === "Tuesday" || day === "Thursday") {
    alert("Class day!");
  } else if(day === "Saturday" || day=== "Sunday") {
    alert("Weekend!")
  }else {
    alert("Boring");
  }
}