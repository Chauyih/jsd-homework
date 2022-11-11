//Conditionals
//The World Translator

  let language = prompt("Key in Language : ");
  if (language == "English")
  {
    console.log( "Hello World"); 
  }
  else if (language == "French")
  {
   console.log( "Bonjour le monde"); 
  }
  else
  {
    console.log( "Hai dunia"); 
  }

 
//The Grade Assigner
let testScore = prompt("Key in Score : ");
testScore = parseFloat (testScore); 
if (testScore >= 80)
{
  console.log( "Grade A"); 
}
else if (testScore >= 70 &&  testScore <= 79 )
{
 console.log( "Grade B"); 
}
else if (testScore >= 60 &&  testScore <= 69 )
{
 console.log( "Grade C"); 
}
else if (testScore >= 50 &&  testScore <= 59 )
{
 console.log( "Grade D"); 
}
else
{
  console.log( "Grade F"); 
}

//You and Your Government
let inpAge = prompt("Key in Age : ");
inpAge = parseFloat (inpAge); 
if (inpAge >= 35)
{
    console.log( "You can vote AND hold any place in government!"); 
}
else if (inpAge >= 25 &&  inpAge <= 34 )
{
    console.log( "You can vote AND run for the Senate!"); 
}
else if (inpAge >= 18 &&  inpAge <= 24 )
{
    console.log( "You can vote!"); 
}
else
{
    console.log( "You can't vote yet"); 
}




//Air Conditioning
let temperature = prompt("Key in temperature : ");

const airFunctioning = true; 
const normalTemp = 22 ; 
const abnormalTemp = 30 ; 

if ( airFunctioning &&  (temperature >= normalTemp ) )
{
  console.log( "Turn on the A/C Please"); 
}
else if (!airFunctioning &&  (temperature >= normalTemp ) )
{
  console.log( "Fix the A/C now! It's hot!"); 
}
else 
{
  console.log( "Fix the A/C whenever you have the chance... It's cool..."); 
}



//Golf
//Option 1
let score = prompt("Key in your golf score : ");
score= parseInt(score); 

const par = parseInt(72) ; 

if (score == 1 )
{
  console.log( "Hole in one "); 

}
else if ( score <= (par - 2) )
{
  console.log( "Eagle"); 

}
else if ( score = (par - 1) )
{
  console.log( "Birdie"); 

}
else if ( score == par )  
{
  console.log( "Par"); 

}
else if ( score == (par + 1) )
{
  console.log( "Bogey"); 

}
else if ( score == (par + 2) )  
{
  console.log( "Double Bogey"); 

}
else if ( score >= (par + 3) )  
{
  console.log( "Not sure"); 

}



//Store a user's message.
let message = prompt("Key in your message : ");
const substring = "?";

function checkQuery(message)
{
   let queryMessage = false ; 
   if ( message.includes(substring))
   {
      queryMessage = true ; 

   } else
   {
      queryMessage = false ; 

   }
   return queryMessage ; 
};


function isEmptyString(message) 
{
  if (typeof message === 'string' && message.trim().length === 0) {
       
    return true;
   } else {
  
     return false ; 
   }
}

 
function checkMessage(message) {

  let iSQuestion =  checkQuery(message) ; 
   
  if (iSQuestion)
  {
    console.log( "Sure"); 
  }
  else
  {
    if (isEmptyString(message) )
    {
  
      console.log( "Fine. Be that way!"); 
    }
    else if ( message.toUpperCase() === message )
    {
        console.log( "Woah, chill out!" ); 
  
    }  
    else {
  
      console.log( "Whatever "); 
    }


  }
    

}
checkMessage(message) ;


//The Pluralizer 
function pluralizeAndStringify(value, word, suffix = 's'){
  if (value == 1){
   return value + ' ' + word;
  }
  else {
   return value + ' ' + word + suffix;
  }
};

pluralizeAndStringify(2, "ant")


//The Rest
function checkWinner(choice1,choice2){
  if(choice1===choice2){
      return "The result is a tie!";
  }
  else if(choice1==="rock"){
      if(choice2==="scissors"){
          return "rock wins"
      }
      else if(choice2==="paper"){
          return "paper wins";
      }
  }
  else if(choice1==="paper"){
      if(choice2==="scissors"){
          return "scissors win"
      }
      else if(choice2==="rock"){
          return "paper wins";
      }
  }
  else if(choice1==="scissors"){
      if(choice2==="paper"){
          return "scissors win"
      }
      else if(choice2==="rock"){
          return "rock wins";
      }
  }} ; checkWinner("rock","scissors")