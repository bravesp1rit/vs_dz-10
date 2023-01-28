'use strict';

// let nomOrStr = prompt('input number or string');
// console.log(nomOrStr);

// if (nomOrStr === null) {
//     console.log('вы отменили');
// } else if (nomOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+nomOrStr)) {
//     console.log(' number is Ba_NaN');
// } else {
//     console.log('OK!');
// }

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(numOrStr){
    case null:
        console.log('вы отменили');
        break;
    case '':
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}