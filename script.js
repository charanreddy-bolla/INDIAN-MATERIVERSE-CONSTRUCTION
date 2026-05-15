// Welcome alert

window.onload = function(){
    console.log("Indian Materiverse Construction Website Loaded");
};

// Contact form message

document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();
    });

});

// Smooth scroll animation

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});
