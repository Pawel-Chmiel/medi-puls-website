const burger = document.querySelector(".top-bar-burger");
const menu = document.querySelector(".navi");

const toggleMenu = () => {
    menu.classList.toggle("open");
    burger.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu)

// scroll to top icon //
const scrollToTopIcon = document.querySelector(".scroll-to-top");
const flag = true;

function showScroll() {
    let scrollHeight = window.scrollY;
    if (scrollHeight > 300) {
        scrollToTopIcon.classList.add("visible");
    } else {
        scrollToTopIcon.classList.remove("visible");
    }
}

window.addEventListener('scroll', showScroll)

scrollToTopIcon.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})