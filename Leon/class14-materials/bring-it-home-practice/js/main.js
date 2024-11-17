// *Variables*
// Create a variable and console log the value

let starLord = "Peter Jason Quill";
console.log(starLord);

// Create a variable, add 10 to it, and alert the value

let twenty = 10;
twenty = twenty + 10;
alert(twenty);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub(a,b,c,d) {
    let answer = a-b-c-d;
    return answer;
}

console.log(sub(100,2,3,4));

// Create a function that divides one number by another and returns the remainder

function div(a,b) {
    let answer = a/b;
    return answer;
}

console.log(div(10,2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jum(a,b) {
    let c = a+b;
    let d = 50;
    if (c > d) {
        alert("Jumanji!!!")
    }else{
        alert("pick a higher number")
    }
}

console.log(jum(30,30))
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zeb(a,b,c) {
    let safari = a*b*c;
    if (safari % 3 == 0) {
        alert("Zebra")
    }else{
        alert("pick a higher number")
    }
}

console.log(zeb(3,3,3));
console.log(zeb(1,1,4));