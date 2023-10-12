const user={
    userName: 'Jai',
    price:'free',

    welcomeUser: function(){
        console.log(`${this.userName} has logged in!`);
    }
}

user.welcomeUser()
user.userName="Rahul"
user.welcomeUser()

//In `node environment` this refers to empty object
//In `browser environment` this refers to Window object

// function test(){
//     let userName='Ajay'
//     console.log(this.userName);
// }

// test()
//In functions `this` does not refer inside function's scope/

//ARROW Syntax:()=>() o/r ()=>{}
const testArrow = () => {
    let userName='Ajay'
    console.log(this.userName);

}

const addTwo = ( num1, num2) => {
    return num1+num2
}
console.log(addTwo(2, 5));

const addTwo2 = ( num1, num2) => num1+num2
console.log(addTwo2(5, 7));
//In {} braces return statement has to be used:EXPLICIT function
//In () braces return statement doesn't occur: IMPLICIT function

//IIFE Immediately invoked function call; Syntax: (Function wrapped)(function called); "Semicolon needed in order to break a function"
((name) => {
    console.log(`Testing 1.2.3 ${name}`);
})('Jack');