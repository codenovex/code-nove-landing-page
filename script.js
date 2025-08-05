document.addEventListener('DOMContentLoaded', function() {

    // --- Section Fade-In Animation on Scroll ---
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Countdown Timer ---
    const countdownElement = document.getElementById('countdown');
    
    // Set timer for 10 minutes from when the script loads
    let timeInSeconds = 10 * 60; 

    function updateTimer() {
        const minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;

        // Add leading zero if seconds is less than 10
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Update the display
        countdownElement.textContent = `${minutes}:${seconds}`;

        // Decrement time
        timeInSeconds--;

        // Change glow effect when time is low
        if (timeInSeconds < 60) {
            countdownElement.style.textShadow = `
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px #ff4d4d,
                0 0 82px #ff4d4d,
                0 0 92px #ff4d4d,
                0 0 102px #ff4d4d,
                0 0 151px #ff4d4d`;
        }

        // Check if the timer has finished
        if (timeInSeconds < 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = "0:00";
            // Optional: You can hide the timer or show a "Time's up!" message
            const timerBox = document.querySelector('.timer-box p:first-of-type');
            if(timerBox) {
                timerBox.textContent = "THE LAUNCH OFFER HAS ENDED";
            }
        }
    }

    // Start the timer
    const timerInterval = setInterval(updateTimer, 1000);
});