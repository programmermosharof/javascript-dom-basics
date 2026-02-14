console.log("Hi My nam is Mosharof");

const subHeading = document.getElementById("subTitle");

console.log(subHeading.innerText);

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs.length);

const paragraph = document.getElementsByTagName('p');
const newP = document.createElement('p');

newP.innerText = 'Hi My Name is Mosharof';

document.body.appendChild(newP);

console.log(paragraph.length);

for(let i of paragraph){
    console.log(i);
}

let h3 = document.getElementsByTagName('h3')
console.log(h3);
console.log(h3[0]);
const newItem = document.createElement('li')
newItem.innerText = "React JS";
document.querySelector('ul').appendChild(newItem);

const list = document.getElementsByTagName("li")
for(let i = 0; i < list.length; i++){
    list[i].innerText += "Done";
    console.log(list[i].innerText);
}

const heading = document.getElementById("title");
heading.innerText = 'Hello My Name is Mosharof';
console.log(heading);

const allParagraphs = document.getElementsByClassName('text');

for (let i = 0; i < allParagraphs.length; i++) {
    
    allParagraphs[i].style.color = "red";
    console.log(i);
}