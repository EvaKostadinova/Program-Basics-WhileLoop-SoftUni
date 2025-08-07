function minNumber(inputArray) {
    let index = 0;
    let input = inputArray[index];
    let minNum = Number.MAX_SAFE_INTEGER;

    while (input !== `Stop`) {
        let currentNum = Number(input);

        if (currentNum < minNum){
            minNum = currentNum;
        }

        index++
        input = inputArray[index]
    }

    console.log(minNum);
    
}

minNumber(["100",

"99",

"80",

"70",

"Stop"]);