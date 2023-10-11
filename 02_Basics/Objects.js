// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Alex",
    "full name": "Alshevic Demetri",
    [mySym]: "mykey1",
    age: 18,
    location: "Rissia",
    email: "Onlyrussiangoogol",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// const tiktoker = new Object()
// const reeler = {}
// reeler.id = '123abc'
// reeler.isLoggedIn = false;
// reeler.name = 'Pathak'

// console.log(tiktoker);
// console.log(reeler);

// const user = {
//     isLoggedIn : false,
//     fullName : {
//         firstName : "Mayank",
//         lastName :"Pathak"
//     }
// }

// console.log(user.fullName.lastName);

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'A',
    4: 'B'
}
// const obj3 = Object.assign({}, obj1, obj2) Same output as below
const obj3 = {...obj1, ...obj2} //Used more than the above syntax

console.log(obj3);

const users2=[
    {
        id:1,
        val:1
    },
    {
        id:2,
        val:2
    },
    {
        id:3,
        val:3
    }
]

console.log(Object.keys(obj1));
console.log(Object.values(obj1));


