//Variables and Primitive Data Types

//The Age Calculator
const dt = new Date();
let currentYear = dt.getFullYear();
let birthYear  = prompt("Key in Your Birth Year : ");
birthYear = parseInt(birthYear);
let Age = currentYear - birthYear; 
let Age2 =Age + 1 ; 

console.log(" They are either "  +  Age +  " or" +  Age2 ) ;   



//The Lifetime Supply Calculator
let inpAge  = prompt("Key in Your Age : ");
inpAge= parseInt(inpAge) ; 
let maxAge = parseInt(100) ; 

let estimatedAmt = parseInt(5) ; 
let Total = (maxAge - inpAge ) * estimatedAmt ; 
console.log(" You will need " +  Total + "  to last you until the ripe old age of " + maxAge ) ; 
 

//The Geometrizer
//calculate Circumfrence
let radius = prompt("Key in radius : ");
var y = (Math.PI * radius) * 2;
console.log("Circumfrence : " + y );


//calculate area
let radius2 = prompt("Key in radius : ");
var x = (Math.PI * radius2) * radius2;
console.log(" Area is " + x ); 

 



//The Temperature Converter
 //convertCelsiusToFahrenheit
let celsius = prompt("Key in Celsius : ");
celsius = parseInt(celsius);
const fahrenheit = (celsius * 1.8) + 32 ; 
 
console.log(  celsius  + " celsius is equal to fahrenheit " + fahrenheit );

 


  //convertFahrenheitToCelsius
  let fahrenheit2 = prompt("Key in Fahrenheit : ");
  fahrenheit2 = parseInt(fahrenheit2);
  const celsius2 =  Math.floor(5 / 9 * (fahrenheit2 - 32));

  console.log(  fahrenheit2  + " fahrenheit is equal to celsius " + celsius2 );
 



