const name ="Harsh"
const repoCount=50

console.log(name + repoCount +" value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-7,4)
console.log(anotherString);

const newStringOne="  Harsh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://hitesh.com/hitesh%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

