const menuButton = document.querySelector('.hamburger');
const arr = Array.from(menuButton);

const menu = document.querySelector('.menu-controls-container');

menuButton.addEventListener('click', (e) => {
    console.log("Clicked");

    menu.classList.toggle('show');
    for (i = 1; i <= menuButton.childElementCount; i++) {
        if(menuButton.children[i-1].className === `line-${i}`) {
            menuButton.children[i-1].className += '-open';
        } else {
            menuButton.children[i-1].className = `line-${i}`;
        }
    }


    // if (menuButton.firstElementChild.className.includes("open")) {
    //     menu.style.display = "block";
    // } else {
    //     menu.style.display = "none";
    // }

    // console.log(menu.style.display);
    // console.log(menu.classList.toggle('showing'));
    
})