let img = document.querySelector(".first-row")
let header = document.querySelector('header')
let bars = document.querySelector(".bars")
let navList = document.querySelector(".nav-list")
let windowWidth = window.innerWidth
// -------change Img Src ---------------


if (windowWidth <= 750) {
    img.src = "./assets/images/image-web-3-mobile.jpg";
    img.style.cssText = `
    width:100%;
    height:auto;`;

} else {
    img.src = "./assets/images/image-web-3-desktop.jpg";
}

// function toggleClass() {
//     if (windowWidth <= 780) {
//         navList.classList.toggle("toggle");
//     }
// }

// window.addEventListener("resize", toggleClass);

