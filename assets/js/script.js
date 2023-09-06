const readMorePost = () => {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("readMorePost");
    let btnText = document.getElementById("detailNews");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

const readMoreEvents = () => {
    let dots = document.getElementById("eventsDots");
    let moreText = document.getElementById("readMoreEvents");
    let btnText = document.getElementById("detailEvents");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

let slideIndex = 0;

const autoSlider = () => {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    let sliderDots = document.getElementsByClassName("sliderDots");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    } 
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    for (i = 0; i < sliderDots.length; i++) {
        sliderDots[i].className = sliderDots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    sliderDots[slideIndex-1].className += " active";
    setTimeout(autoSlider, 4000);
}

autoSlider();