function accountBalance(array) {
    let index = 0;
    let input = array[index];
    sum = 0;

    while (input !== `NoMoreMoney`) {
        let money = Number(input);

        if (money < 0){
            console.log(`Invalid operation!`);
            break;
        }
        
        sum += money;
        console.log(`Increase: ${money.toFixed(2)}`);
        
        index++;
        input = array[index];
    }

    console.log(`Total: ${sum.toFixed(2)}`);
    

}

accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"]);