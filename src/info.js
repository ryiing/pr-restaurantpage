const infoPage = (() => {
    const content = document.getElementById("content");
    
    const updateInfo = (() => {
        content.innerHTML = '';
        content.classList.remove('content');
        content.classList.add('info');
        createInfo();
    });

    const createInfo = (() => {
        const item1 = document.createElement('div');
        item1.classList.add('menuItem');

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


    return {
        updateInfo
    }
})();

export {
    infoPage
};