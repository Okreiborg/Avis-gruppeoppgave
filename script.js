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
  
    if (ekstraInnhold.style.display === "none") {
      ekstraInnhold.style.display = "block";
      knapp.textContent = "Vis mindre";
    } else {
      ekstraInnhold.style.display = "none";
      knapp.textContent = "Les mer";
    }
  }


