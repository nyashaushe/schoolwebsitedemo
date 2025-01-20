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

// Animate numbers
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('stat')) {
                const numberElement = entry.target.querySelector('.number');
                const endValue = parseInt(numberElement.dataset.target);
                animateValue(numberElement, 0, endValue, 2000);
            }
        }
    });
}, {
    threshold: 0.1
});

// Apply observers
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Modern navigation handling
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});


