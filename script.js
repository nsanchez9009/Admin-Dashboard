const favoriteButtons = document.querySelectorAll(".favorite")
const watchButtons = document.querySelectorAll(".watch")

let favClicked = false;

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