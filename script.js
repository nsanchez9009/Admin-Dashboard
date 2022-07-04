const favoriteButtons = document.querySelectorAll(".favorite")
const watchButtons = document.querySelectorAll(".watch")

let favClicked = false;
let watchClicked = false;

favoriteButtons.forEach(button => button.addEventListener("click", () => {
    if (favClicked === false) {
        button.classList.add("favoriteClicked");
        favClicked = true;
    }

    else if (favClicked === true) {
        button.classList.remove("favoriteClicked");
        favClicked = false;
    }
}));

watchButtons.forEach(button => button.addEventListener("click", () => {
    if (watchClicked === false) {
        button.classList.add("watchClicked");
        watchClicked = true;
    }

    else if (watchClicked === true) {
        button.classList.remove("watchClicked");
        watchClicked = false;
    }
}))