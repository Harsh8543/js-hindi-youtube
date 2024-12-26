const myNums=[1,2,3]
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc}and currval: ${currval}`);
//     return acc + currval
// }, 0)


const myTotal=myNums.reduce( ( acc, curr) => acc + curr ,0)

console.log(myTotal);

const shoppingCart= [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "react course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 3999
    },
]

const harsh = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(harsh);










