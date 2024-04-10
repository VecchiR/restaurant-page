export function loadStore() {
    const content = document.querySelector('#content');
    
    const store = document.createElement('div');
    store.setAttribute('class', 'store-content');

    const hoursContainer = document.createElement('div');
    hoursContainer.setAttribute('class', 'hours');
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class', 'contact-info');
    const locationContainer = document.createElement('div');
    locationContainer.setAttribute('class', 'location');

    const hoursSpan = document.createElement('span');
    hoursSpan.setAttribute('class', 'title');
    hoursSpan.innerHTML = 'Hours';
    const contactSpan = document.createElement('span');
    contactSpan.setAttribute('class', 'title');
    contactSpan.innerHTML = 'Contact Us';
    const locationSpan = document.createElement('span');
    locationSpan.setAttribute('class', 'title');
    locationSpan.innerHTML = 'Location';

    const hp1 = document.createElement('p');
    const hp2 = document.createElement('p');
    const hp3 = document.createElement('p');
    const hp4 = document.createElement('p');
    hp1.setAttribute('class', 'subtitle');
    hp3.setAttribute('class', 'subtitle');
    hp1.innerHTML = 'Wednesday - Sunday:';
    hp2.innerHTML = '10:00 - 20:00';
    hp3.innerHTML = 'Monday & Tuesday:';
    hp4.innerHTML = 'Closed';

    const cp1 = document.createElement('p');
    const cp2 = document.createElement('p');
    const cp3 = document.createElement('p');
    const cp4 = document.createElement('p');
    cp1.setAttribute('class', 'subtitle');
    cp3.setAttribute('class', 'subtitle');
    cp1.innerHTML = 'E-mail:';
    cp2.innerHTML = 'icynicy@chillout.com';
    cp3.innerHTML = 'Telephone:';
    cp4.innerHTML = '(+99) 999-9999';

    const lp1 = document.createElement('p');
    lp1.innerHTML = 'Real St. 44, Right Here';

    hoursContainer.appendChild(hoursSpan);
    hoursContainer.appendChild(hp1);
    hoursContainer.appendChild(hp2);
    hoursContainer.appendChild(hp3);
    hoursContainer.appendChild(hp4);

    contactContainer.appendChild(contactSpan);
    contactContainer.appendChild(cp1);
    contactContainer.appendChild(cp2);
    contactContainer.appendChild(cp3);
    contactContainer.appendChild(cp4);

    locationContainer.appendChild(locationSpan);
    locationContainer.appendChild(lp1);

    store.appendChild(hoursContainer);
    store.appendChild(contactContainer);
    store.appendChild(locationContainer);

    content.appendChild(store);
}

