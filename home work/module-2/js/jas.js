
// let resort = +prompt('Please, enter a number from 1 to 3. 1(Taba), 2(Sharm), 3(Hurgada)')
// switch (resort) {
//     case 1:
//         console.log('this is resort Taba');
//         break;
//     case 2:
//         console.log('this is resort Sharm');
//         break;
//     case 3:
//         console.log('this is resort Hurgada');
//         break;
//     default:
//         console.log('doesn\'t have this resort. Please try again');
//         break;
// }


let people = +prompt('please, enter the number people');

let Taba = 6,
    Hurgada = 25,
    Sharm = 15;

if (people < 1 || !Number.isInteger(people)) {
    console.log('number incorrect');

}
else if (people < 7 && confirm('Ви погоджуєтесь бути в групі Taba')) { 
    alert('дякуємо за Ваш вибір');
    console.log(`${Taba -= people}`);
}
else if (people < 16 && confirm('Ви погоджуєтесь бути в групі Sharm')) {
        alert('дякуємо за Ваш вибір');
    console.log(`${Sharm -= people}`);
}
 else if (people < 26 && confirm('Ви погоджуєтесь бути в групі Hurgada')) {
    alert('дякуємо за Ваш вибір');
    console.log(`${Hurgada -= people}`);
}
else if (people > 25) {
    alert('Мест нет!'); 
}