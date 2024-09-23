let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .menu_items a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .menu_items a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
function sendmail(){
// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add event listener to contact form submit button
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a new email using the EmailJS service
    emailjs.send("pawan.prajapat9904@", "template_xz58en9", {
        name: name,
        email: email,
        message: message
    }).then(function(response) {
        console.log('Email sent successfully!', response);
        alert('Thank you for reaching out! I\'ll get back to you soon.');
    }, function(error) {
        console.log('Error sending email:', error);
        alert('Oops, something went wrong. Please try again later.');
    });
});
}

const h1Elements = document.querySelectorAll('.h1trt h1');

function restartAnimation() {
    h1Elements.forEach(h1 => {
        h1.style.animation = 'none'; // Reset the animation
        h1.offsetHeight; // Trigger reflow to apply the change
        h1.style.animation = ''; // Restart the animation
    });
}

// Initial animation start
restartAnimation();

// Loop to restart the animations every 7 seconds (2s animation duration + 5s delay)
setInterval(() => {
    restartAnimation();
}, 7000);

const button = document.getElementById('animatedButton');

// Function to start the animation
function startAnimation() {
    button.classList.add('rotating');
}

// Function to stop the animation
function stopAnimation() {
    button.classList.remove('rotating');
}

// Add event listeners to control animation
button.addEventListener('mouseenter', startAnimation);
button.addEventListener('mouseleave', stopAnimation);

// Optional: Control animation speed with JavaScript
function setAnimationSpeed(speed) {
    const styleSheet = document.styleSheets[0];
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.selectorText === '.button::before') {
            rule.style.animation = `rotateBorder ${speed}s linear infinite`;
        }
    }
}

// Example of setting animation speed
setAnimationSpeed(4); // Adjust speed in seconds

