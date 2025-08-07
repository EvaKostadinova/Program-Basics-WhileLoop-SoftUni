function examPreparation(input) {
    const maxPoorGrades = Number(input[0]);
    let index = 1;

    let poorGrades = 0;
    let sumGrades = 0;
    let totalProblems = 0;
    let lastProblem = ``;

    while(input[index] !== `Enough`){
        const problemName = input[index++];
        const grade = Number(input[index++]);

        if (grade <= 4) poorGrades++;

        sumGrades += grade;
        totalProblems++;
        lastProblem = problemName

        if (poorGrades === maxPoorGrades){
            console.log(`You need a break, ${poorGrades} poor grades.`);
            return;
        }
    }
    const average = (sumGrades/totalProblems).toFixed(2);
    console.log(`Average score: ${average}`);
    console.log(`Number of problems: ${totalProblems}`);
    console.log(`Last problem: ${lastProblem}`);
    
}

examPreparation(["3",

"Money",

"6",

"Story",

"4",

"Spring",

"Time",

"5",

"Bus",

"6",

"Enough"]);