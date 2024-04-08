import { loadHome } from "./home";
import { loadStore } from "./store";
import { loadMenu } from "./menu";


console.log("heyoo - I'm coming from src/index.js");
loadHome();


const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach((btn) => btn.addEventListener('click', () => {
    //aplicar um "check if tab = active" pra ver ser precisa carregar ou não ---------------------------------------------------
    eraseContent();
    if (btn.classList.contains('home')) {
        loadHome();
    }
    else if (btn.classList.contains('menu')) {
        loadMenu();
    }
    else if (btn.classList.contains('store')) {
        loadStore();
    }
}));

function eraseContent() {
    const content = document.querySelector('#content');
    if(content.hasChildNodes()) {    
        content.removeChild(content.firstChild);
    }
}