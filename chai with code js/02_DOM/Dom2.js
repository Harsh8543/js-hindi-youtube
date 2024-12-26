const myBody=document.body;
console.log(myBody);

const box2=document.getElementById('box-2');   //always we have to use the getElementById to access any element
// jaise ki ham classes ka use karte hai ham kisi ko style karne ke liye CSS me
console.log(box2);
const divs=document.getElementsByTagName('div');
console.log(divs);

const boxes= document.getElementsByClassName('random');
console.log(boxes);

const random = document.querySelector('.container .random');
console.log(random);

       //CONTENT 

//changing HTML Content using innerHTML:

document.getElementById(id).innerHTML = new HTML

//changing HTML attributes values:
document.getElementById("myImage").src="landscape.jpg";
document.getElementById("p2").style.color="blue";

//modifying class in HTML
element.classList.add("mystyle");
element.classList.remove("mystyle");
element.classList.toggle("mystyle");

//implementation of the above CONTENT

const box1 = document.getElementsById('box-1');
//box1.innerHTML = "<h1>Hello</h1> <p> Hello World</p>"
box1.style.backgroundColor="red"
box1.classList.add('round-border');


const boxes =document.getElementsByClassName('box');

for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');

//CREATING AND APPENDING THE HTML
const para=document.createElement("p");
const element=document.getElementById("div1");
element.appendChild(para);

const newParargeph=document.createElement('p');
newParagraph.innerText="This is brand new";

const container=document.getElementById('container');
container.appendChild(newParagraph);