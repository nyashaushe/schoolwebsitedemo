const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('nav-item');
    nav_links.classList.toggle('nav-item');
})


document.querySelectorAll(".nav-menu").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("nav-item");
        nav_links.classList.remove("nav-item");
    })
);

// Add after existing code
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Add form submission handlers
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            // Add your form submission logic here
            console.log('Form submitted successfully');
        }
    });
});


