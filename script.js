/* Typing Animation */

const typingElement = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "React.js Developer",
    "Web Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    let currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1500;
    }
    else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (typingElement) {
    typeEffect();
}


/* Mobile Navigation */

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", function() {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

        });

    });

}
/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function(entries, observer) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {

    observer.observe(element);

});
/* Contact Form Validation */

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check empty fields

    if (name === "" || email === "" ||
        subject === "" || message === "") {

        formStatus.style.color = "#ef4444";

        formStatus.textContent = "Please fill all the fields.";

        return;
    }

    // Validate email

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formStatus.style.color = "#ef4444";

        formStatus.textContent = "Please enter a valid email address.";

        return;
    }

    // Success message

    formStatus.style.color = "#22c55e";

    formStatus.textContent =
        "Your form is valid! Thank you for contacting me.";

    contactForm.reset();

});