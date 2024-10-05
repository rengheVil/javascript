
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed."; }
    
    
    /*var x = 5;
    var y =10;
    console.log(x+y); */
  

 // document.getElementById("demo").innerHTML="Paragraph changed.";

  // single-line comment 

//   function myfile(){
//     alert("Hello world");
//   }

//   function my11(){
//     alert(5*10);
//   }

//   function my12(){
//     alert(10/5);
//   }
 
 // console.log(5+5+"5");
  
 //console.log(2 + "2");

 //console.log("5" - 3);

 //console.log("Hello" + 1 + 2);


    // program to reverse a string

/*function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);*/

/*function toSeconds(str) {
    var pieces = str.split(":");
    var result = Number(pieces[0]) * 60 + Number(pieces[1]);
    return(result.toFixed(3));
}

console.log(toSeconds("1:29.460"));*/


// const baseValue = prompt('Enter the base of a triangle: ');
// const heightValue = prompt('Enter the height of a triangle: ');

// // calculate the area
// const areaValue = (baseValue * heightValue) / 2;

// console.log( `The area of the triangle is ${areaValue}`);


//---------------------------22----------
// function calculateAge (birthDate, otherDate) {
//     birthDate = new Date(birthDate);
//     otherDate = new Date(otherDate);

//     var years = (otherDate.getFullYear() - birthDate.getFullYear());

//     if (otherDate.getMonth() < birthDate.getMonth() || 
//         otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
//         years--;
//     }

//     return years;
// }
//---------------------------------24------------






function reverseLetter(str){

    return str.split("").reverse().join("");
}



const original="welcome to this javascript program!";
const home = original.split(" ").reverse().join(" ");
console.log(home);


const reverse=reverseLetter(home);

console.log(reverse);