const box = document.getElementById('name')
box.innerHTML = '<h2>hi My name is Mosharof</h2>';
console.log(box.innerHTML);


const link = document.getElementById("link");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://web.whatsapp.com");

link.setAttribute("target", "_blank");

const chang = document.getElementById('message');
chang.innerText =  "I am learning DOM" ;
chang.style.color = "blue";
chang.style.fontSize = "30px";





// console.log(chang);

const boxs = document.getElementById('box');

boxs.innerHTML = '<h3>Welcome</h3><p>This is dynamic content</p>';

console.log(boxs);

const changphoto = document.getElementById('photo');

console.log(changphoto.getAttribute('src'));

changphoto.setAttribute(
  'src',
  'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png'
);

changphoto.setAttribute("width", "300");



const title = document.getElementById("title");

title.style.color = "red";
title.style.backgroundColor = "yellow";
title.style.fontSize = "30px";
title.style.borderRadius = '30px';
title.style.width = '150px';
title.style.textAlign = 'center';
title.style.padding = '10px';

const f = document.getElementById('Fahim');
f.classList.add('fahim');
f.classList.remove('fahim');
f.classList.toggle('fahim');


const my = document.getElementById("myName")
my.style.color = 'green';
my.style.fontSize ='25px';
my.style.textAlign = 'center';

const cards = document.getElementById('card');
cards.classList.add('dark');

setTimeout(function() {
    cards.classList.remove('dark');
}, 3000);


const btn = document.getElementById("btn");
const card = document.getElementById("card");

btn.addEventListener("click", function() {
    card.classList.toggle("dark");
});

const para = document.querySelector("body");
console.log(para.parentNode);



const items = document.querySelectorAll("li");

console.log("Length:", items.length);

console.log("Parent of first li:", items[0].parentNode);

const boxB = document.getElementById('box-a');

const newHeading = document.createElement("h4");
newHeading.innerText = "I am created by JavaScript";
boxB.appendChild(newHeading)



const container = document.getElementById("container");

// console.log("childNodes:", container.childNodes);
// console.log("children:", container.children);
