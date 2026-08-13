

var slideIndex = 0;
carousel();


function myMove(){
    var i;
    var x = document.getElementsByClassName("my-slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    if (slideIndex == x.length) {slideIndex = 1;} 
    else if (slideIndex == -1) {slideIndex = x.length - 1;} 
    x[slideIndex].style.display = "block";
}


function plusDivs(n) {
    slideIndex += n;
    myMove();
}


function carousel() {
    slideIndex++;
    myMove();
    setTimeout(carousel, 5000); // Change image every 5 seconds
}
