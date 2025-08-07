function maxNumber(inputArray) {
    let index = 0;
    let input = inputArray[index];
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (input !== `Stop`) {
        let currentNum = Number(input);

        if (currentNum > maxNum){
            maxNum = currentNum;
        }

        index++
        input = inputArray[index]
    }

    console.log(maxNum);
    
}

maxNumber(["100",

"99",

"80",

"70",

"Stop"]);