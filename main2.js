function generateHeart() {
    const heart = document.createElement('div');
    heart.innerText = "💔"; // Added a heart emoji
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Added 's' for seconds
    heart.classList.add('heart');
    document.body.appendChild(heart);
  }
  
  setInterval(generateHeart, 300);
  