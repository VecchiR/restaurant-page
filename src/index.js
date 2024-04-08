import { loadHome } from "./home";

console.log("heyoo - I'm coming from src/index.js");
loadHome();


const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach((btn) => btn.addEventListener('click', () => {
    if (btn.classList.contains('home')) {
        console.log('this is home');
    }
    else if (btn.classList.contains('menu')) {
        console.log('this is menu');
    }
    else if (btn.classList.contains('about')) {
        console.log('this is about');
    }
}));