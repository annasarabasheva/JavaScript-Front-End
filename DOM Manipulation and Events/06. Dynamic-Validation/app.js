function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', function() {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('error');
            emailInput.value = '';
        } else {
            emailInput.classList.remove('error');
            emailInput.value = '';
        }
    });
}
