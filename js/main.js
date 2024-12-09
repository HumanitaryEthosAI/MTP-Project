// 1️⃣ Podświetlanie aktywnej sekcji w menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// 2️⃣ Formularz zgłoszeniowy — Walidacja e-maila i symulacja wysłania
const form = document.querySelector('form');
const emailInput = form.querySelector('input[name="email"]');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiegamy przeładowaniu strony

    const emailValue = emailInput.value.trim();
    if (validateEmail(emailValue)) {
        alert('Dziękujemy za dołączenie do MTP! Sprawdzaj skrzynkę e-mail.');
        form.reset();
    } else {
        alert('Podaj poprawny adres e-mail.');
    }
});

// Funkcja walidująca e-mail (podstawowa walidacja)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// 3️⃣ Płynne przewijanie do sekcji po kliknięciu w link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const targetSection = document.querySelector(href);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// 4️⃣ Efekt pojawiania się sekcji podczas przewijania (prosty efekt "fade-in")
const fadeInElements = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    fadeInElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (elementPosition < screenHeight - 100) {
            element.classList.add('visible');
        }
    });
});
