const menuPage = (() => {
    const content = document.getElementById("content");
    
    const updateMain = (() => {
        content.textConent = '';
        createImg();
        createInfo();
    });

    const createInfo = (() => {
        const info = document.createElement('div');
        info.classList.add('.info');

        const title = document.createElement('div');
        const description = document.createElement('div');
        const address = document.createElement('div');
        title.classList.add('.title');
        description.classList.add('.discription');
        address.classList.add('.address');

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
        mainImage.src = '../img/mainImage.png';
        content.appendChild(mainImage);
    });

    updateMain();

    return {
        updateMain
    };
})();

