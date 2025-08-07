function coins(change) {
    let coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let coinsCount = 0;
    let sum = Math.round(change * 100);
    let index = 0;

    while (sum >0 && index < coins.length){
        let currentCoint = Math.round(coins[index] * 100);
        
        while (sum >= currentCoint){
            sum -= currentCoint;
            coinsCount++;
        }
        index++;
    }

    console.log(`${coinsCount}`);
    
}

coins(1.23);