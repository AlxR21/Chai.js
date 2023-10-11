/*{} the curly braces is known as scope */
//we don't use VAR NO NEVER

let a = 300
let b 
let c = 21
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    console.log("INNER: ", b);
}



console.log(a);
console.log(b);
console.log(c);