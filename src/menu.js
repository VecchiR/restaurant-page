export function loadMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu-content');


    const sizeContainer = document.createElement('div');
    sizeContainer.setAttribute('class', 'sizes-container');

    const sizeSpan = document.createElement('span');
    sizeSpan.setAttribute('class', 'title');
    sizeSpan.innerHTML = 'Sizes';

    const cupContainer = document.createElement('div');
    cupContainer.setAttribute('class', 'cup-container');

    const coneContainer = document.createElement('div');
    coneContainer.setAttribute('class', 'cone-container');

    const cupSpan = document.createElement('span');
    cupSpan.setAttribute('class', 'subtitle');
    cupSpan.innerHTML = 'Cup (up to 3 flavors):';

    const coneSpan = document.createElement('span');
    coneSpan.setAttribute('class', 'subtitle');
    coneSpan.innerHTML = 'Cone:';

    const cupTable = document.createElement('table');
    cupTable.setAttribute('class', 'cup-table');

    const coneTable = document.createElement('table');
    coneTable.setAttribute('class', 'cone-table');


    const cuptr1 = document.createElement('tr')
    const cuptr2 = document.createElement('tr')
    const cuptr3 = document.createElement('tr')
    const cuptr1td1 = document.createElement('td');
    cuptr1td1.innerHTML = 'Small';
    const cuptr1td2 = document.createElement('td');
    cuptr1td2.innerHTML = '-';
    const cuptr1td3 = document.createElement('td');
    cuptr1td3.innerHTML = '$4';
    cuptr1.appendChild(cuptr1td1);
    cuptr1.appendChild(cuptr1td2);
    cuptr1.appendChild(cuptr1td3);




    const cuptr2td1 = document.createElement('td');
    cuptr2td1.innerHTML = 'Medium';
    const cuptr2td2 = document.createElement('td');
    cuptr2td2.innerHTML = '-';
    const cuptr2td3 = document.createElement('td');
    cuptr2td3.innerHTML = '$6';
    cuptr2.appendChild(cuptr2td1);
    cuptr2.appendChild(cuptr2td2);
    cuptr2.appendChild(cuptr2td3);



    const cuptr3td1 = document.createElement('td');
    cuptr3td1.innerHTML = 'Large';
    const cuptr3td2 = document.createElement('td');
    cuptr3td2.innerHTML = '-';
    const cuptr3td3 = document.createElement('td');
    cuptr3td3.innerHTML = '$8';
    cuptr3.appendChild(cuptr3td1);
    cuptr3.appendChild(cuptr3td2);
    cuptr3.appendChild(cuptr3td3);

    cupTable.appendChild(cuptr1);
    cupTable.appendChild(cuptr2);
    cupTable.appendChild(cuptr3);



    const conetr1 = document.createElement('tr')
    const conetr2 = document.createElement('tr')
    const conetr1td1 = document.createElement('td');
    conetr1td1.innerHTML = '1 Scoop';
    const conetr1td2 = document.createElement('td');
    conetr1td2.innerHTML = '-';
    const conetr1td3 = document.createElement('td');
    conetr1td3.innerHTML = '$4';
    conetr1.appendChild(conetr1td1);
    conetr1.appendChild(conetr1td2);
    conetr1.appendChild(conetr1td3);
    const conetr2td1 = document.createElement('td');
    conetr2td1.innerHTML = '2 Scoops';
    const conetr2td2 = document.createElement('td');
    conetr2td2.innerHTML = '-';
    const conetr2td3 = document.createElement('td');
    conetr2td3.innerHTML = '$6';
    conetr2.appendChild(conetr2td1);
    conetr2.appendChild(conetr2td2);
    conetr2.appendChild(conetr2td3);

    coneTable.appendChild(conetr1);
    coneTable.appendChild(conetr2);












    const flavorContainer = document.createElement('div');
    flavorContainer.setAttribute('class', 'flavor-container');

    const flavorSpan = document.createElement('span');
    flavorSpan.setAttribute('class', 'title');
    flavorSpan.innerHTML = 'Flavors';

    const flavorTable = document.createElement('table');
    flavorTable.setAttribute('class', 'flavor-table');


    const flavortr1 = document.createElement('tr');
    const flavortr2 = document.createElement('tr');
    const flavortr3 = document.createElement('tr');
    const flavortr4 = document.createElement('tr');
    const flavortr5 = document.createElement('tr');
    const flavortr6 = document.createElement('tr');

    const flavortr1td1 = document.createElement('td');
    flavortr1td1.innerHTML = 'Banana';
    flavortr1.appendChild(flavortr1td1);
    const flavortr1td2 = document.createElement('td');
    flavortr1td2.innerHTML = 'Pistachio';
    flavortr1.appendChild(flavortr1td2);
    const flavortr2td1 = document.createElement('td');
    flavortr2td1.innerHTML = 'Chocolate';
    flavortr2.appendChild(flavortr2td1);
    const flavortr2td2 = document.createElement('td');
    flavortr2td2.innerHTML = 'Rocky Road';
    flavortr2.appendChild(flavortr2td2);
    const flavortr3td1 = document.createElement('td');
    flavortr3td1.innerHTML = 'Chocolate Chip';
    flavortr3.appendChild(flavortr3td1);
    const flavortr3td2 = document.createElement('td');
    flavortr3td2.innerHTML = 'Salted Caramel';
    flavortr3.appendChild(flavortr3td2);
    const flavortr4td1 = document.createElement('td');
    flavortr4td1.innerHTML = 'Coffee';
    flavortr4.appendChild(flavortr4td1);
    const flavortr4td2 = document.createElement('td');
    flavortr4td2.innerHTML = 'Stawberry';
    flavortr4.appendChild(flavortr4td2);
    const flavortr5td1 = document.createElement('td');
    flavortr5td1.innerHTML = 'Lemon';
    flavortr5.appendChild(flavortr5td1);
    const flavortr5td2 = document.createElement('td');
    flavortr5td2.innerHTML = 'Vanilla';
    flavortr5.appendChild(flavortr5td2);
    const flavortr6td1 = document.createElement('td');
    flavortr6td1.innerHTML = 'Mint Chocolate Chip';
    flavortr6.appendChild(flavortr6td1);
    const flavortr6td2 = document.createElement('td');
    flavortr6td2.innerHTML = 'Watermelon';
    flavortr6.appendChild(flavortr6td2);

    flavorTable.appendChild(flavortr1);
    flavorTable.appendChild(flavortr2);
    flavorTable.appendChild(flavortr3);
    flavorTable.appendChild(flavortr4);
    flavorTable.appendChild(flavortr5);
    flavorTable.appendChild(flavortr6);



    cupContainer.appendChild(cupSpan);
    cupContainer.appendChild(cupTable);
    coneContainer.appendChild(coneSpan);
    coneContainer.appendChild(coneTable);

    sizeContainer.appendChild(sizeSpan);
    sizeContainer.appendChild(cupContainer);
    sizeContainer.appendChild(coneContainer);

    flavorContainer.appendChild(flavorSpan);
    flavorContainer.appendChild(flavorTable);

    menu.appendChild(sizeContainer);
    menu.appendChild(flavorContainer);


    content.appendChild(menu);
}













