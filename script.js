const message = document.querySelector('.message');
const text = document.querySelector('.text');

const birthdayMessage = "Happy Birthday!";
let messageIndex = 0;

function animateMessage() {
  if (messageIndex < birthdayMessage.length) {
    text.textContent += birthdayMessage.charAt(messageIndex);
    messageIndex++;
    setTimeout(animateMessage, 70);
  } else {
    message.style.opacity = 1;
  }
}

animateMessage();
