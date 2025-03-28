/* Navbar */

function showDropdownContent() {
    const dropDownContent = document.querySelector(".dropdown-content")
    if (dropDownContent.style.display == "flex" ) {
        dropDownContent.style.display = "none"
    } else {
        dropDownContent.style.display = "flex"
    }
}

/* Slutt Navbar */ 