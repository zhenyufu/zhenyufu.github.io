// Open and close the sidenav on medium and small screens
function w3_open() {
    document.getElementById("my-side-text").style.display = "block";
    document.getElementById("my-overlay").style.display = "block";
}
function w3_close() {
    document.getElementById("my-side-text").style.display = "none";
    document.getElementById("my-overlay").style.display = "none";
}


// Accordions
function myAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme", "");
    }
}

