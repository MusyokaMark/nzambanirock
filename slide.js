var slideIndex = 0;
showSlides();
function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for(i = 0; i<slides.length; i++){
        slides[i].getElementsByClassName.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex=1
    }
    slides[slideIndex-1].getElementsByClassName.display = "block";
    setTimeout(showSlides, 2000);
}