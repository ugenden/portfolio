
const texts = [
    "DEVELOPER",
];
const speed = 100;
const eraseSpeed = 50;

const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter() {
    if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 500);
    }
}

window.onload = typewriter;


// contact section
function sendMessage() {
    // Get values from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const message = document.getElementById('message').value;

    // Check if any fields are empty
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Display the collected information
    alert(`Message Sent!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

    // Reset the form after alert
    document.getElementById('contactForm').reset();
}

// Skill percentage counter

const skillCounters = document.querySelectorAll('.count');
const countSpeed = 200; // The lower the slower

skillCounters.forEach(counter => {
    const updateCount = () => {
        const target = 70; // Set target to 70%
        const count = +counter.innerText;
        
        // Lower inc to slow and higher to speed up
        const inc = target / countSpeed;
        
        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
});

// Trigger the counter animation when the skills section is in view
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        skillCounters.forEach(counter => {
            counter.innerText = '0';
            updateCount();
        });
        observer.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);

