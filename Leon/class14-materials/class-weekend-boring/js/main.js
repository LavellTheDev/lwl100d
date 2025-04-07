//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
  }else{
    console.log("BORING")
  }

}

// document.querySelector('#check').addEventListener('click', check)

// function check (){
//   const day = document.querySelector('#day').value.toLowerCase()

//   if(day === "tuesday" || day === "thursday"){
//     console.log("You Have Class")
//   }else if(day === "saturday" || day === "sunday"){
//     console.log("Its the Weekend!")
//   }else{
//     console.log("Boring")
//   }
// }


document.querySelector('#check').addEventListener('click', check)

function check(){
  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday"|| day === "thursday"){
    console.log("Today is class")
  }else if(day === "saturday" || day === "sunday"){
    console.log("It's the weekend")
  }else{
    console.log("Boring")
  }

}