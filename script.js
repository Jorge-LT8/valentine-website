// Function to send love message
function sendLove() {
    const recipientName = document.getElementById('recipientName').value.trim();
    const loveMessage = document.getElementById('loveMessage').value.trim();
    const messageResult = document.getElementById('messageResult');

    // Validate inputs
    if (!recipientName) {
        showMessage('Please enter the recipient\'s name 💕', 'error');
        return;
    }

    if (!loveMessage) {
        showMessage('Please write a message 💌', 'error');
        return;
    }

    if (loveMessage.length < 10) {
        showMessage('Your message is too short! Express your feelings more 💕', 'error');
        return;
    }

    // Show success message
    showMessage(
        `💕 Love sent to ${recipientName}! 💕<br>Your heartfelt message has been delivered with all the love! 🎉`,
        'success'
    );

    // Clear the form
    setTimeout(() => {
        document.getElementById('recipientName').value = '';
        document.getElementById('loveMessage').value = '';
        messageResult.innerHTML = '';
    }, 3000);
}

// Helper function to display messages
function showMessage(message, type) {
    const messageResult = document.getElementById('messageResult');
    messageResult.innerHTML = message;
    messageResult.className = type;

    // Add animation
    messageResult.style.animation = 'none';
    setTimeout(() => {
        messageResult.style.animation = 'slideUp 0.5s ease-out';
    }, 10);
}

// Allow Enter key to send message
document.addEventListener('DOMContentLoaded', function() {
    const recipientInput = document.getElementById('recipientName');
    const messageInput = document.getElementById('loveMessage');
    const sendButton = document.querySelector('.message-box button');

    if (recipientInput) {
        recipientInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && messageInput.value.trim()) {
                sendLove();
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                sendLove();
            }
        });
    }

    // Add heart animation on page load
    addHeartAnimation();
});

// Create floating hearts on click
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') {
        createFloatingHeart(e.pageX, e.pageY);
    }
});

// Create floating heart animation
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '2em';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'float-up 2s ease-out forwards';

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) translateX(${Math.random() * 50 - 25}px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Add heart animation on page load
function addHeartAnimation() {
    const elements = document.querySelectorAll('h2, h3');
    elements.forEach((el, index) => {
        el.style.position = 'relative';
        el.addEventListener('mouseenter', function() {
            this.style.color = '#ff1493';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        el.addEventListener('mouseleave', function() {
            this.style.color = '#d41f63';
            this.style.transform = 'scale(1)';
        });
    });
}

// Confetti effect function (bonus)
function createConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc0cb'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = '💕';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.fontSize = '1.5em';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Add confetti animation to styles
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fall {
        0% {
            opacity: 1;
            transform: translateY(0) rotateZ(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(${window.innerHeight}px) rotateZ(360deg);
        }
    }
`;
document.head.appendChild(confettiStyle);
