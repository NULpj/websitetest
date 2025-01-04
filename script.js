// JavaScript to change the message on button click
document.getElementById('clickButton').addEventListener('click', function() {
    document.getElementById('message').innerHTML = 'You clicked the button! 🎉';
});

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time in the #clock element
    document.getElementById('clock').innerText = timeString;
}

// Call updateClock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initialize the clock immediately when the page loads
updateClock();
