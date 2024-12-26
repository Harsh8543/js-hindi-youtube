//Immediately Invoked function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//() () first paranthesis which represent the definition and the second one is represent the execution

//by Arrow function

// ( () =>{
    //simple IIFE
//     console.log(`DB CONNECTED`);
// })()


( (name) =>{
    console.log(`DB CONNECTED ${name}`);
})('Harsh')






