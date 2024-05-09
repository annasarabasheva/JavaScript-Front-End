function focused() {
    let inputElements = document.querySelectorAll('input[type=text]');
    for (const input of inputElements) {
        input.addEventListener('focus', function() {

            input.parentNode.classList.add('focused')
            
        })
        input.addEventListener('blur', function() {
            input.parentNode.classList.remove('focused');
        });
    };
    
}