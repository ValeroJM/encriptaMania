document.addEventListener('DOMContentLoaded', function() {
    let forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });

    document.getElementById('encryptBtn').addEventListener('click', function() {
        if (validateForm()) {
            performAction('encrypt');
        }
    });

    document.getElementById('decryptBtn').addEventListener('click', function() {
        if (validateForm()) {
            performAction('decrypt');
        }
    });

    function validateForm() {
        let form = document.querySelector('.needs-validation');
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return false;
        }
        return true;
    }

    function performAction(action) {
        let cipherType = document.getElementById('cipherType').value;
        let message = document.getElementById('message').value;
        let result;

        if (cipherType === 'base64') {
            result = action === 'encrypt' ? btoa(message) : atob(message);
        } else if (cipherType === 'reverse') {
            result = action === 'encrypt' ? message.split('').reverse().join('') : message.split('').reverse().join('');
        }
        // Agrega más métodos de cifrado aquí

        document.getElementById('result').textContent = result;
    }
});
