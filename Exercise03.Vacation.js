function vacation(input) {
    const moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    
    let index = 2;
    let totalDays = 0;
    let spendDaysCount = 0;

    while (moneyAvailable < moneyNeeded){
        let actionType = input[index];
        let actionAmount = Number(input[index+1]);
        index += 2;
        totalDays++;

        if (actionType === `spend`){
            moneyAvailable -= actionAmount;
            if (moneyAvailable < 0) {
            moneyAvailable = 0;
            } 
        spendDaysCount++;
        } else if (actionType === `save`){
            moneyAvailable += actionAmount;
            spendDaysCount = 0;
        }

    if (spendDaysCount === 5) {
        console.log(`You can't save the money.`);
        console.log(`${totalDays}`);
        return;
    }
        
    }

    console.log(`You saved the money for ${totalDays} days.`);

}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"]);