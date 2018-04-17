const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
console.log(alphabet.indexOf(']'));
console.log(alphabet.indexOf('\''));
console.log(alphabet.indexOf('/'));

let first = [alphabet.slice(0, 12)];
console.log(first);
let second =[alphabet.slice(13, 23)];
console.log(second);
let third = [alphabet.slice(24, 33)];
console.log(third);

keyboard = [];
keyboard.push(first,second,third);
console.log(keyboard);


let hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][9];
console.log('hello');

let javascript = keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4];
console.log('javascript');

let trainer = keyboard[0][5]+keyboard[0][4]+keyboard[1][0]+keyboard[0][7]+keyboard[2][5]+keyboard[0][2]+keyboard[0][4];
console.log('trainer');

