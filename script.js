// Function to update the clock every millisecond
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0'); // Pad milliseconds to 3 digits

    // Format the time as HH:MM:SS:MMM
    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    // Display the time in the #clock element
    document.getElementById('clock').innerText = timeString;
}

// Call updateClock every 1 millisecond (1ms = 1ms)
setInterval(updateClock, 1);

// Initialize the clock immediately when the page loads
updateClock();
