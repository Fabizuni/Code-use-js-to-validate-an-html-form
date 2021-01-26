window.onload = function () {
    const element = document.getElementById('myForm');
    element.addEventListener('submit', event => {
        event.preventDefault();
        // actual logic, e.g. validate the form
        validateForm();
    });

}

function validateForm() {
    const inputs = document.getElementById("myForm").elements;

    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];

        if (!input.value && input.type !== 'button' && input.type !== 'submit') {
            alert ('llenar todos los espacios');
            return;
        }
    }

    alert('el form es valido');
}