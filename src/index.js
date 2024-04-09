import { loadHome } from "./home";
import { loadStore } from "./store";
import { loadMenu } from "./menu";
import './style.css';
import icyVector from './resources/icy.svg';



console.log("heyoo - I'm coming from src/index.js");
loadHome();
const icy = new Image();
icy.src = icyVector;
icy.alt = 'coolest-cone';
document.querySelector('.image-container').appendChild(icy);

const homeTab = document.querySelector('.home');
homeTab.addEventListener('click', selectTab);
homeTab.classList.add('selected');
const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click', selectTab);
const storeTab = document.querySelector('.store');
storeTab.addEventListener('click', selectTab);

function eraseContent() {
    const content = document.querySelector('#content');
    if (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
}


function selectTab() { 
    if (!this.classList.contains('selected')) {
        console.log('iranbitch');
        eraseContent();
        homeTab.classList.remove('selected');
        menuTab.classList.remove('selected');
        storeTab.classList.remove('selected');
        if (this.classList.contains('home')) {
            loadHome();
            homeTab.classList.add('selected');
        }
        else if (this.classList.contains('menu')) {
            loadMenu();
            menuTab.classList.add('selected');
        }
        else if (this.classList.contains('store')) {
            loadStore();
            storeTab.classList.add('selected');
        }
    }
}