let btns = document.querySelectorAll(".content");
let main = document.querySelector(".mid__center");

bgImages = [
    "url(./img/10-art.jpeg)",
    "url(./img/9-art.jpeg)",
    "url(./img/8-art.jpeg)",
    "url(./img/7-art.jpeg)",
    "url(./img/6-art.jpeg)",
    "url(./img/5-art.jpeg)",
    "url(./img/4-art.jpeg)",
    "url(./img/3-art.jpeg)",
    "url(./img/2-art.jpeg)",
    "url(./img/1-art.jpeg)"
];

let handler = (index) => {
    let { style } = main;
    style.backgroundImage = bgImages[index];
};

btns.forEach((btn, index) => {
    btn.addEventListener("mouseover", (e) => {
        handler(index);
    });
});


// let menu = document.querySelector(".top__menu");
// menu.addEventListener("click", (e) => {
//     menu.classList.toggle("menu__bar");
// });
