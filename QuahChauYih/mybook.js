let books = [
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    alreadyRead: false,
    img: "https://books.google.com.my/books/content?id=lic72KLZq-0C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73A_KOeFxOYCzcwTccmCqS_MWL8Z5ouHY91SERb5bPKpQMZgvY5KrIJTMms3448Qxdq9Fjp1J_DMp-Mb8W_5AvV3ph8gC9EPOjJu027O_PIVcU8PhKgr6KIQ6BPHl79wn4OaIA_"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    alreadyRead: true,
    img: "https://m.media-amazon.com/images/I/51Pe5D36rML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433086293i/21.jpg"
  },
  {
    title: "A Life on our Planet",
    author: "David Attenborough",
    alreadyRead: true,
    img: "https://m.media-amazon.com/images/I/41ft8ICa81L._SX323_BO1,204,203,200_.jpg"
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    alreadyRead: false,
    img: "https://m.media-amazon.com/images/I/51IcVjsJlDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
  }
];



let bookList = document.createElement("ul");

for (let  i = 0; i < books.length; i++) {
  
  let bookItem = document.createElement("li");
  let bookDesc = document.createElement("label") ;  
  let bookImg = document.createElement("img");
  

  bookDesc.textContent = books[i].title + " by "  + books[i].author ; 
  bookDesc.style.textAlign = "center" ; 
   
  bookImg.src = books[i].img;
  bookImg.style.width = "50px";
  bookItem.appendChild(bookImg);
  bookItem.appendChild(bookDesc);
  
  if (books[i].alreadyRead) {
    bookItem.style.color = "green";
  }
  else {
    bookItem.style.color = "red";
  }
  
  bookList.appendChild(bookItem);
}

document.body.appendChild(bookList);




 



