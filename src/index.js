import './style.css';
import { infoPage } from './info';

const mainBtn = document.getElementById("main");
const menuBtn = document.getElementById("menu");
const infoBtn = document.getElementById("info");


const mainPage = (() => {
    const content = document.getElementById("content");
    
    const updateMain = (() => {
        content.innerHTML = '';
        content.classList.remove();
        content.classList.add('content');
        createImg();
        createInfo();
    });

    const createInfo = (() => {
        const info = document.createElement('div');
        info.classList.add('info');

        const title = document.createElement('div');
        const description = document.createElement('div');
        const address = document.createElement('div');
        title.classList.add('title');
        description.classList.add('discription');
        address.classList.add('address');

        title.textContent = 'Authentic Japanese Restaurant';
        description.textContent = 'Toronto\'s most authentic Japanese Restaurant where you can find the freshest fish and sushi money can buy';
        address.textContent = '123 Toronto Stree | 647-123-4567';

        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(address);

        content.appendChild(info);
    });

    const createImg = (() => {
        const mainImage = document.createElement('img');
        mainImage.classList.add('mainImg');
        mainImage.src = '../img/mainImage.png';
        content.appendChild(mainImage);
    });

    // updateMain();

    return {
        updateMain
    };
})();

const menuPage = (() => {
    let menu = [];
    const content = document.getElementById("content");
    
    const updateMenu = (() => {
        content.innerHTML = '';
        content.classList.remove('content');
        content.classList.add('menu');
        createMenu();
    });

    const createMenu = (() => {
        const item1 = document.createElement('div');
        item1.classList.add('menuItem');

        const item1Img = document.createElement('img');
        item1Img.src = '../img/menu/1.png';

        const item1Name = document.createElement('div');
        item1Name.textContent = 'Tempure Bowl';

        const item1Price = document.createElement('div');
        item1Price.classList.add('itemPrice');
        item1Price.textContent = '$20.00';

        item1.appendChild(item1Img);
    
        item1.appendChild(item1Name);
        item1.appendChild(item1Price);
        content.appendChild(item1);
    });


    updateMenu();

    return {
        updateMenu
    }
})();





mainBtn.addEventListener('click', () => {
    mainPage.updateMain();
});

menuBtn.addEventListener('click', () => {
    menuPage.updateMenu();
});

infoBtn.addEventListener('click', () => {
    infoPage.updateInfo();
});