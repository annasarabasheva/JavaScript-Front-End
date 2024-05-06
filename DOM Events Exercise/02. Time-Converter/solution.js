function attachEventsListeners() {
    function convertDays() {
        const daysInput = document.getElementById('days').value;
        const hoursInput = daysInput * 24;
        const minutesInput = hoursInput * 60;
        const secondsInput = minutesInput * 60;
    
        document.getElementById('hours').value = hoursInput;
        document.getElementById('minutes').value = minutesInput;
        document.getElementById('seconds').value = secondsInput;
    }
    
    function convertHours() {
        const hoursInput = document.getElementById('hours').value;
        const daysInput = hoursInput / 24;
        const minutesInput = hoursInput * 60;
        const secondsInput = minutesInput * 60;
    
        document.getElementById('days').value = daysInput;
        document.getElementById('minutes').value = minutesInput;
        document.getElementById('seconds').value = secondsInput;
    }
    
    function convertMinutes() {
        const minutesInput = document.getElementById('minutes').value;
        const hoursInput = minutesInput / 60;
        const daysInput = hoursInput / 24;
        const secondsInput = minutesInput * 60;
    
        document.getElementById('days').value = daysInput;
        document.getElementById('hours').value = hoursInput;
        document.getElementById('seconds').value = secondsInput;
    }
    
    function convertSeconds() {
        const secondsInput = document.getElementById('seconds').value;
        const minutesInput = secondsInput / 60;
        const hoursInput = minutesInput / 60;
        const daysInput = hoursInput / 24;
    
        document.getElementById('days').value = daysInput;
        document.getElementById('hours').value = hoursInput;
        document.getElementById('minutes').value = minutesInput;
    }
    
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);
}

