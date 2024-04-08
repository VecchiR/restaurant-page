export function loadStore() {
    const content = document.querySelector('#content');
    const store = document.createElement('div');
    store.setAttribute('class', 'store-content');
    store.innerHTML = 'This is the Store page!';
    content.appendChild(store);

}