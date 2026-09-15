// Mobile navigation

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919876543210";

    const text =
        "New Digital Marketing Enquiry%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Message: " + encodeURIComponent(message);

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + text,
        "_blank"
    );

});