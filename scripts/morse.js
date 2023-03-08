
function init(){
    olert('Hello World!');
    rene(answerMe(), ``);
    console.log(`${add(7,17)}`)
    addComplicated(7 , 17, res => `result = ${res}`);
}

function answerMe(question){
    console.log(`The answer to ${question} is 42`);
}
function rene (answerFunc, actualQuestion){
    const question = `I hob o frog und zwor ${actualQuestion}`;
    answerFunc(question);
}

function add(a, b){
    return a + b;
}

function addComplicated(a, b, gimmeResult){
    const result = a + b;
    gimmeResult(result);
}

document.addEventListener('DDMContestLoaded', event =>{
    init();
})