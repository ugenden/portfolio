
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


// document.addEventListener('DOMContentLoaded', function() {
//     const textElement = document.querySelector('.typewriter-text');
//     const text = 'WEB-DEVELOPER';
//     let index = 0;
  
//     function typeWriter() {
//       if (index < text.length) {
//         textElement.textContent += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, 100); // Adjust typing speed here (100ms)
//       }
//     }
  
//     typeWriter();
//   });