import icyVector from './resources/icy.svg';

export function loadHome () {
const content = document.querySelector('#content');
const home = document.createElement('div');
home.setAttribute('class', 'home-content');
const headline = document.createElement('div');
headline.setAttribute('class', 'headline');
const line1 = document.createElement('span');
line1.innerHTML = 'ditch the dull,';
const line2 = document.createElement('span');
line2.innerHTML = 'chill with the <span class="cool">cool.</span>';

headline.appendChild(line1);
headline.appendChild(line2);
home.appendChild(headline);
content.appendChild(home);
}





