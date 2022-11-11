//Loops
//The even/odd reporter

for (let  i=0; i<= 20; i++) {
  if (i === 0) {
          console.log(i +  " is even");
  }
  else if (i % 2 === 0) {
          console.log(i + " is even");   
  }
  else {
          console.log(i + " is odd");
  }
}


//Multiplication Tables
let result = 'x ';
for (var i = 0; i <= 12; i++) {

  result += '[' + i + '] ';
  result += '\n'
  
}

console.log(result);


//Multiplication Tables
let result = "";
const multiplyNum = 9 ;
for (var i = 0; i <= 12; i++) {

  result += "["   + i * multiplyNum + "] ";
  result += "\n"
    
}

console.log(result);


//The Grade Assigner
function gradeAssigner(score) {
  if (score > 90) {
      return "A";
  } else if (score > 80) {
      return "B";
  } else if (score > 70) {
      return "C";
  } else if (score > 65) {
      return "D";
  } else {
      return "F";
  }
}

for (let i = 60; i <= 100; i++) {
console.log("For " + i + ", you got a " + gradeAssigner(i));
}