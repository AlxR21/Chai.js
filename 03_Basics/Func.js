function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(`Alshevik`))

function shoppingCart(...num1){
  return num1;
}
console.log(shoppingCart(100, 200, 300))

const user = {
    username: "hitesh",
    prices: 199
}

// you have to include the parameter not the argument's name
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})