document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current time in UTC
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        const now = new Date();
        const hours = String(now.getUTCHours() + 1).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Function to update the current day of the week
    function updateDay() {
        const currentDayElement = document.getElementById('current-day');
        const days = ['Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'];
        const now = new Date();
        currentDayElement.textContent = days[now.getUTCDay()];
    }

    // Function to update the current date
    function updateDate() {
        const currentDateElement = document.getElementById('current-date');
        const now = new Date();
        const day = String(now.getUTCDate()).padStart(2, '0');
        const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = now.getUTCFullYear();
        currentDateElement.textContent = `${day}-${month}-${year}`;
    }

    // Initial update and set interval for the current time
    updateTime();
    setInterval(updateTime, 1000);
    updateDay();
    updateDate();
});

