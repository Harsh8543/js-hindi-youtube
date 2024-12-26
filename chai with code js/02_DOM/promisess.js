
//let's we have to learn the promises we have to creat the promises and also we have to learn the consumed the promises

//here the promises taking the call back inside it they are having the two parts resolve and the reject

const promiseOne = new Promise (function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()   //resolve is the method here when we call the resolve then the .then which is written below is to be connected to the resolve
    }, 1000 )
})
//then is directly connected to the our resolve
// .then ke andar ek function all hota hai jo ki directly ek function ko call karta hai 
//jiske andar jo bhi chij upar huaa hai uska output return hota hai

promiseOne.then(function (){
   console.log("Promise consumed");
})
//****************************************************************************************************************************************************************************************************************************************************************************************** */
//  same bs kisi variable me save nahi kiya directly ek me hi kar diya

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()   //resolve is the method here when we call the resolve then the .then which is written below is to be connected to the resolve
    }, 1000 )
}).then(function (){
    console.log("Promise consumed");
 })

//********************************************************************************************************************************************************************************************************************************************************************************************************************** */
const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email: "chai@axample.com"})   //resolve is the method here when we call the resolve then the .then which is written below is to be connected to the resolve
    }, 1000 )
})
//esase ye to pata chal gaya kiupar resolve ke andar jo bhi parameter pass karenge wo to niche .then wale me mil jata hai
promiseThree.then(function (user){
    console.log(user);
 })
 //**
//*********************************************************************************************************************************************************************************************************** */
const promiseFour= new Promise(function(resolve , reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"Harsh",password:"12345"})
        } else{
            reject('ERROR:Something Went to be Wrong')
        }
    },1000)
})
promiseFour.then(user => {
   console.log(user);
   return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//********************************************************************************************************************************************************************************************* */

const promiseFive= new Promise(function(resolve , reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"javascript",password:"12345"})
        } else{
            reject('ERROR:JS Went to be Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
consumePromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.










