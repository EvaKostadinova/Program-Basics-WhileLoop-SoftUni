 function oldBooks(input) {
    const favouriteBook = input[0];
    let index = 1; 
    let checkedBooks = 0;

    while (input[index] !== `No More Books`) {
        if (input[index] === favouriteBook){
            console.log(`You checked ${checkedBooks} books and found it.`);
            return;
        }
        checkedBooks++;
        index++;    
        
    }

    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedBooks} books.`);
    
    

 }

 oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"]);