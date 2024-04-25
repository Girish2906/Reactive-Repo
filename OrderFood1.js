function f(x){
    x = "x-" + x ; 
    return function(y){
        y = "y-" + x ; 
        return function(z){
            return "z-" + y ; 
        }
    }
}
let g = f("a")("b")("c") ; 
// print(g) ; 
console.log(g) ; 


const arr = [5  , 1, 3 , 2 , 6] ; 
const ans = arr.reduce( function(accumulator , element){
    accumulator += element ; 
    return accumulator ; 
}  , 0 ) ; 

console.log(ans) ; 

let ans1 = 0 ; 

let answer = arr.reduce(  function (answer , curr){
    answer = curr > answer ? curr : answer ; 
    return answer ; 
} , 0 ) ; 
console.log(answer) ; 

const users = [
    {
        firstName : "Bill" , lastName: "Gates" , age: 65
    } , 
    {
        firstName : "Steve" , lastName: "Jobs" , age: 65 
    } , 
    {
        firstName : "Jeff" , lastName : "Bezos" , age : 54
    } , 
    {
        firstName : "Elon" , lastName : "Musk" , age : 51
    }
] ; 

console.log(users) ; 

const greatPeople = users.map( function(user){
    return user.firstName + " " + user.lastName ;  
})
console.log(greatPeople) ; 

// const seduce = users.reduce( function(answer , users){
//     if(users.age)
// }  , 0) ; 
const ageAnswer = users.filter( function(user){
    return user.age < 60 ;  
}  ) ; 
console.log("Really", ageAnswer) ; 
console.log("shit" ) ; 
const final = ageAnswer.map(function(user){
    return user.firstName + user.lastName ; 
}) ; 
console.log(final) ;     
const array = users.reduce( function(arr , user){
    if(user.age < 60){
        arr.push(user.firstName) ; 
    }
    return arr ; 
} , []  ) ; 
console.log(array) ; 