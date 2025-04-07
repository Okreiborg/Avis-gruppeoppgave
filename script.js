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



/* Kortversjon boks: */
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

  /* Slutt Kortversjon boks*/



  /* Mørk modus */
const skiftmorklys = document.getElementById("lysmork")
const navElementer = document.querySelectorAll("nav > *")
console.log(navElementer)


let morkTheme = false
function skiftMork() {
    if (morkTheme) {
        //Theme er mørk: skift til lys
        console.log("skift til lys")
        morkTheme = false
        skiftmorklys.innerHTML = "Mørk"

        document.body.className = "lys"
    } else {
        //Theme er lys: skift til mørk
        console.log("skift til mørk")
        morkTheme = true
        skiftmorklys.innerHTML = "Lys"

        document.body.className = "mork"
    }
}

  




