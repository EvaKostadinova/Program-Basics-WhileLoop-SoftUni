function move(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let high = Number(input[2]);
    
    let index = 3;
    const totalSPace = width * length * high;
    let usedSpace = 0;

    while (index < input.length && input[index] !== `Done`) {
        usedSpace += Number(input[index]);

        if (usedSpace > totalSPace) break;
        index++;
        
    }

    const diff = Math.abs(totalSPace - usedSpace);

    if (usedSpace > totalSPace){
        console.log(`No more free space! You need ${diff} Cubic meters more`);
    } else {
        console.log(`${diff} Cubic meters left.`);
        
    }

}

move(["10",

"10",

"2",

"20",

"20",

"20",

"20",

"122"]);