document.querySelector("#learnMore").addEventListener("click", function(event) {
    event.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
    });
});