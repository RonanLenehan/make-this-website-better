console.log('Connected!')

// RL: My code starts here
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const datePicker = document.getElementById("datePicker");

// RL: Toggling the hamburger menu when clicked
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        // RL: Close the menu
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        menuItems.forEach(
            function (menuItem) {
                menuItem.style.display = "none";
            });
    } else {
        // RL: Open the menu
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        menuItems.forEach(
            function (menuItem) {
                menuItem.style.display = "block";
            });
    }
}

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    });

hamburger.addEventListener("click", toggleMenu);

// RL: Set date pickers max value to today (could be changed e.g. to ensure people applying are over 18)
datePicker.max = new Date().toISOString().split('T')[0];