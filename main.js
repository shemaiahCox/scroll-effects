// General set up
const randomNum = () => {
    const num = Math.floor(Math.random() * 256);
    return num;
}

// Slide in when page loads
window.addEventListener('load', () => {
    const autoShowContent = document.querySelector(".auto");

    if (Math.floor(autoShowContent.getBoundingClientRect().top) <= Math.floor(window.innerHeight)) {
        autoShowContent.classList.add("slide-in");
    }
})

// Slide in when page scrolls
window.addEventListener('scroll', () => {
    const scrollShowContent = document.querySelectorAll(".scroll");

    scrollShowContent.forEach((element) => {
        if (Math.floor(element.getBoundingClientRect().top) <= Math.floor(window.innerHeight)) {
            element.classList.add("slide-in");
        }
    })
})

// On load set html background color
window.addEventListener('load', () => {
    const html = document.getElementById("root");

    html.style.backgroundColor = `rgba(${randomNum()}, ${randomNum()}, ${randomNum()}, 0.3)`;

})

// On scroll dynamically change html backgound color
window.addEventListener('scroll', () => {
    const html = document.getElementById("root");
    const scrollPosition = Math.floor(html.scrollTop);

    if (scrollPosition % 10 === 0) {

        html.style.backgroundColor = `rgba(${scrollPosition}, ${randomNum()}, ${randomNum()}, 0.3)`;
        html.style.transition = "background-color 500ms 100ms ease";
    }
})
