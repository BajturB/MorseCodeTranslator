import { MorseCode, MorseCodeDic } from "./morse-code.js"; 

const dic = new MorseCodeDic();

function stringifyMorse(morse) {
    let str = '';
    for (let m of morse) {
        str += `${m}_`;
    }
    return str.slice(0, -1);
}

function convertTextToMorse() {
    const textBox = document.getElementById('textIn');
    const val = textBox.value;
    if (val === undefined || val === null || val === '') {
        return;
    }
    const morse = dic.convertTextToMorse(val);
    document.getElementById('morseOut').innerHTML = stringifyMorse(morse);
}

function convertMorseToText() {
    const textBox = document.getElementById('morseIn');
    const val = textBox.value;
    let splitArr;
    if(val.includes('_')){
        splitArr = val.split('_');
    }else{
        splitArr = val.split(' ');
    }
    document.getElementById('textOut').innerHTML = dic.convertMorseToText(splitArr);
}

function init() {
    document.getElementById('convBtn').addEventListener('click', () => { 
        convertTextToMorse();
    })
    document.getElementById('convTxtBtn').addEventListener('click', () => {
        convertMorseToText();
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});