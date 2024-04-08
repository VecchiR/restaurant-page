export function loadMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu-content');
    menu.innerHTML = 'This is the Menu page!';
    content.appendChild(menu);
}
