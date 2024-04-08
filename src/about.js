export function loadAbout() {
    const content = document.querySelector('#content');
    const about = document.createElement('div');
    about.setAttribute('class', 'about-content');
    about.innerHTML = 'This is the About page!';
    content.appendChild(about);

}