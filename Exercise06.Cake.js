function cake(input) {
    const length = input[0];
    const width = input[1];
    let piecesOfCakeCount = length * width;
    let index = 2;
    let command = input[index];

    while (command !== `STOP`){
        let takenPieces = Number(command);
        piecesOfCakeCount -= takenPieces;
        
        if (piecesOfCakeCount < 0){
            console.log(`No more cake left! You need ${Math.abs(piecesOfCakeCount)} pieces more.`);
            return;
        }

        index++;
        command = input[index];
    }

    console.log(`${piecesOfCakeCount} pieces are left.`);
    
}

cake(["10",

"10",

"20",

"20",

"20",

"20",

"21"]);