// 1. Mobile Menu Toggle Feature 
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
        // Nav links ke class list me 'active'class ko toggle karein
        navLinks.classList.toggle('active');
    })
    // Jab kisi link par click ho jaye to mobile menu band ho jaye
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 2. Contact Form Validation Feature 
const ContactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); //Page reload ko roknay ke liye

    // Input fields get karein 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Error div get karein
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Reset errors
    nameError.innerText = '';
    emailError.innerText = '';
    messageError.innerText = '';

    let isValid = true;

    // Name Validation
    if (name === '') {
        nameError.innerText = 'Name is required';
        isValid = false;
    }

    // Email Validation (Regex se format check karna)
    const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (email === '') {
        emailError.innerText = 'Email is required';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerText = 'Please enter a valid email';
        isValid = false;
    }

    // Message Validation
    if (messageError === '') {
        messageError.innerText = 'Message is required';
        isValid = false;
    }

    // ager sab kuch theek hai to success message
    if (isValid) {
        alert('Thank you, ' + name + '!You message has been sent successfully.');
        contactForm.reset(); // Form clear karna
    }
});