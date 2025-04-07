/* Navbar: */

function klikk() {
    const dropDownContent = document.querySelector(".dropdown-content")
    if (dropDownContent.style.display == "flex" ) {
        dropDownContent.style.display = "none"
    } else {
        dropDownContent.style.display = "flex"
    }
}

/* Slutt Navbar */ 



/* Sammendrag boks: */
function toggleSammendrag() {
    const ekstraInnhold = document.getElementById("ekstra");
    const knapp = document.querySelector(".knapp");

    const erSynlig = ekstraInnhold.style.display === "block";

    if (erSynlig) {
      ekstraInnhold.style.display = "none";
      knapp.innerHTML = 'Les mer <i class="fa-solid fa-chevron-down"></i>';
    } else {
      ekstraInnhold.style.display = "block";
      knapp.innerHTML = 'Vis mindre <i class="fa-solid fa-chevron-up"></i>';
    }
  }



