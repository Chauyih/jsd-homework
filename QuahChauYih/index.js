//console.log("Hello world"); 

//Display a
//let alphabet = ["a","b","b"]
//console.log(alphabet[0]); 

//Display undefined
//let arrayWithDataType = ["string", undefined, 42,true]
//console.log(arrayWithDataType[1]); 

//let alpha = ["A","B","C"]
//console.log(alpha[0]); 
//console.log(alpha[1]); 
//console.log(alpha[2]); 

//const instruments = [
//"The Great stalacpipe Organ ",
//"Stylophone",
//"Ondes Martenot",
//"sharpischord",
//"Hydraulophone",
//"phrophone"
//];

//console.log(instruments[3]); 

//console.log(instruments[5] = "keyboard");

//console.log(instruments[3]); 
//console.log(instruments[instruments].length - 1] ); 
//console.log(instruments.length - 1 ); 


//const ordinals = [
//    "Zeroeth ",
//    "First",
//    "Second",
 //   "Third",
 //   ];


// for (let i = 0;  i = ordinals.length ; i++ ){
       
 //   console.log(ordinals[i] ); 

//}



//const instruments = [
"The Great stalacpipe Organ ",
"Stylophone",
"Ondes Martenot",
"sharpischord",
"Hydraulophone",
"phrophone"
//];

//for ( let i = 0;  i = instruments.length ; i++ ){
 //   let currentInstrument =  instruments[i] ;  
 //   console.log(currentInstrument ); 

//}
    

//let a= ["b","c"] ; a.push("d")
//console.log(a);
//a.push();


//Add "a" to first array
//a.unshift("a") ;


//let myNumbers = [3,4] ;
//myNumbers.push(5);
//myNumbers.unshift(2); 
//myNumbers.pop();
//myNumbers.shift();

//myNumbers.indexOf(); 


//let rainbowColors = []
 
//rainbowColors.push("orange")
//rainbowColors.unshift("red")
//rainbowColors.push("yellow")
//rainbowColors.push("green")

//rainbowColors.push("blue")
//rainbowColors.push("indigo")
//rainbowColors.push("violet")

//console.log(rainbowColors.length)
//console.log(rainbowColors.length - 6) ; 

//console.log(rainbowColors[rainbowColors.length]) ;

//console.log(rainbowColors.indexOf("blue")) ; 

//const bookSeries = {
//name : "In Search of Lost time" ,
//author : "Marcel",
//rating : 5,
//books :["Swann's way","in the shadow","The Gourmenet"]

//};

//console.log(bookSeries.author);
//console.log(bookSeries.books[4]);

//let name = bookSeries.name;
//let rating = bookSeries.rating; 
//let author = bookSeries.author;
//console.log(name, rating, author);

//
//for ( let i = 0; i = bookSeries.books.length; i ++ )
//{
//    console.log(bookSeries.books[i]);

//}

//Replace topic 
//let course = {
 // topic : "JavaScript"

//}

//console.log(course.topic= "JavaScipt Development");
///console.log(course); 


//const bookSeries = {
//name : "In Search of Lost time" ,
//author : "Marcel",
//rating : 5,
//books :["Swann's way","in the shadow","The Gourmenet"]

//};


//console.log(bookSeries.rating = 6);
//console.log(bookSeries.rating)



//Replace topic 
//let course = {
 //   topic : "JavaScript"
  
// }

 //course.teacher = "Amy"
//course.teachingAsst = ["Dylan","Iman"]
 //console.log(course) 

 //const explorer = {

 // firstName : "Jack" ,
//  lastName: "Delta",
 // birth : {
 //    day:11 ,
 //    month :6 ,
 //    year : 1997

 // }  

 //} ; 

 //console.log(explorer.firstName)  ;

 //console.log(explorer.lastName)  ;

 //console.log(explorer.birth.year)  ;
 //console.log(explorer.birth.day)  ;

//const marxFamily = [

//{ name : "a " , birthyear : 1991 },
//{ name : " b" , birthyear :  1992},
//{ name : " c " , birthyear : 1993},
//]

 
 //for (let i = 0 ; i <= marxFamily.length ; i ++ )
 //{

 //   console.log(marxFamily[i]) 

 //}

 //marxFamily.forEach ( )




const  bookSeries = [
     {  title : "JavaScript" , author : "Amy" ,  alreadyRead : false },
    {  title : "CSS" , author : "Lynee" ,  alreadyRead : false },
    {  title : "JS" , author : "Zamin " ,  alreadyRead : false } 
]

 for (let i = 0 ; i <= bookSeries.length ; i ++ )
 {
    console.log(bookSeries[i]) 
    if (alreadyRead){

        console.log("   You have already read "+ bookSeries.title)  
    }
    else
    {
        console.log(" You still need to read " +  bookSeries.title)  

    }
    

 }


 const  recipe = [
    {  title : "Ginger, Apple and Banana Smoothie" , 
       serving : 2 ,  
       ingredients  : [ " - 500ml Milk ", 
                        " - 2/3 cups of vanilla protein powder", 
                        " - 2 tbs rolled oats ", 
                        " - Pinch of cinnamon ", 
                        " - 2 cups of baby spinach leaves ", 
                        " - 2 frozen bananas ", 
                        " - 2 roughly chopped apples", 
                        " -  1/2 avocado ", 
                        " - 2 tsp fresh ginger ", 
                        " - 6 ice cubes ", 
                      ] 
                    
    },

];

console.log(" That is actually a very nice smoothie " +  recipe.title )  
 
 
