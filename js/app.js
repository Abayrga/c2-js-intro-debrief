let myNumber = 25;
console.log(typeof myNumber);
if (myNumber ===`!number`) {
    console.log('This is not a number');
} else if (myNumber *7) {
    console.log('Gen');
} else if (myNumber *5) {
    console.log('Buzz');
} else if (myNumber *2) {
    console.log('GenBuzz');
} else if (myNumber === 'number') {
    console.log('myNumber');
}else {
console.log('invalid');
}

let itemList = 'Shoes';
 
switch(itemList) {
    case 'Shoes':
    console.log('Shoes are $50');
    break;
    case 'Jeans':
    console.log('Jeans are $25');
    break;
    case 'Hat':
    console.log('Hat-are $12');
    break;
    case 'Socks':
    console.log('Socks are $2');
    break;
    default:
    console.log('Invalid item');
    break;
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() *(max-min) + min);
  }

console.log(getRandomArbitrary(55, 79));
