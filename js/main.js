let nav = document.querySelector(".navigation");
let navLink = document.querySelectorAll(".nav-link");

function navListActive(event) {
    let target = event.target;
    if (target.tagName != "A") {
        false;
    } else {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove("nav-link-active");
        }
        target.classList.add("nav-link-active");

    }
}

nav.addEventListener('click', navListActive);