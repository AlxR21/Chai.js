let name='Alok'

let live='A Trickster'

console.log(`You know ${name} he lives his life in ${live} way.` );

//Another way of declaring a string
let life = new String(`The Universe is in it's core ${live}.`)
console.log(life);
console.log(life.length);
console.log(life.charAt(5));
console.log(life.indexOf('n'));

console.log(life.slice(0,4));
console.log(life.substring(0,21));

const str1='   Spaces   ';
console.log(str1.trim());

console.log(life.split(" "))

console.log(live.replace('A', 'The'));