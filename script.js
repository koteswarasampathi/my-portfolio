/* Typing Animation */

const typingElement = document.getElementById("typing");

const roles = ["Frontend Developer", "React.js Developer", "Web Developer"];

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

  typingElement.textContent = currentRole.substring(0, characterIndex);

  let speed = deleting ? 50 : 100;

  if (!deleting && characterIndex === currentRole.length) {
    deleting = true;
    speed = 1500;
  } else if (deleting && characterIndex === 0) {
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
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}
/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach(function (element) {
  observer.observe(element);
});
/* Contact Form with EmailJS */

(function () {
  emailjs.init({
    publicKey: "9txlAhWmh1aKstBmi",
  });
})();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check empty fields
  if (!name || !email || !subject || !message) {
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

  // Send email using EmailJS
  formStatus.style.color = "#64748b";
  formStatus.textContent = "Sending message...";

  emailjs
    .sendForm("service_z9gcojp", "template_qjfn2rj", contactForm)
    .then(function () {
      formStatus.style.color = "#22c55e";
      formStatus.textContent = "Message sent successfully! Thank you.";
      contactForm.reset();
    })
    .catch(function (error) {
      formStatus.style.color = "#ef4444";
      formStatus.textContent = "Failed to send. Please try again.";
      console.log(error);
    });
});
