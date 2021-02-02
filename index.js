window.onload = function () {
    const element = document.getElementById('myForm');
    element.addEventListener('submit', event => {
        event.preventDefault();
        // actual logic, e.g. validate the form
        onSubmit();
    });

}

function validateForm() {
    const inputs = document.getElementById("myForm").elements;

    for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];

        if (!input.value && input.type !== 'button' && input.type !== 'submit') {
            return false;
        }
    }

    return true
}

function onSubmit() {
    const isValid = validateForm();
    if (isValid) {
        document.getElementById("alertMissing").classList.remove("show")
        const inputs = document.getElementById("myForm").elements;
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            if (input.type !== 'button' && input.type !== 'submit') {
                input.classList.remove("is-invalid")
            }
        }
    } else {
        document.getElementById("alertMissing").classList.add("show")
        const inputs = document.getElementById("myForm").elements;
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            if (input.type !== 'button' && input.type !== 'submit') {
                input.classList.add("is-invalid")
            }
        }
    }
}
