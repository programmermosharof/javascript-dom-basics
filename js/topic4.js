const bg = document.querySelector('.bg-chang');
bg.style.backgroundColor = 'teal';
bg.style.color = 'white';
bg.style.padding = '20px';

const item = document.querySelectorAll('.list');

for (let i = 0; i < item.length; i++) {
    item[i].innerText = item[i].innerText.toUpperCase();
}

const first = item[0];

