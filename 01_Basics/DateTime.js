let todayte=new Date()
console.log(typeof todayte);

console.log(todayte.toString());
console.log(todayte.toTimeString());
console.log(todayte.toDateString());
console.log(todayte.toISOString());
console.log(todayte.toLocaleString());

let date= new Date();
console.log(date.toDateString());

const date2=new Date('01-20-2024')
console.log(date2.getTime());

console.log(`It's ${date.getHours()}'o clock in the morning of ${date.getDate()}th ${date.getMonth()} , ${date.getFullYear()}`);