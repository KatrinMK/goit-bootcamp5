let students = ['den','katya', 'mick', 'vasiliy', 'michael', 'volodymyr', 'alex', 'iryna', 'elena', 'danya', 'vova', 'sasha'];
let team1 = [];
let team2 = [];
let team3 = [];
let teams = [];

for (i = 0, max = students.length; i < max; i++) {
   let random = Math.floor(Math.random() * students.length);

   if (team1.length < 4) {
       console.log('team1', team1);
       team1.push((students.splice(random, 1)).join(','));
   } else if (team2.length < 4) {
    console.log('team2', team2);
    team2.push((students.splice(random, 1)).join(','));
   } else if (team3.length < 4) {
    console.log('team3', team3);
    team3.push((students.splice(random, 1)).join(',')); 
    }
}

console.log(teams.push(team1).push(team2).push(team3).join(','));

