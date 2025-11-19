// Mobile menu toggle & SPA navigation
function showSection(id) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });
    // Afficher la section cible
    const target = document.querySelector(id);
    if (target) {
        target.style.display = 'block';
        // Update nav active state
        document.querySelectorAll('.nav-links a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === id) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    }
}

// Au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    // Afficher par défaut la section Home
    const initialHash = window.location.hash || '#home';
    showSection(initialHash);

    // Écouter les changements de hash
    window.addEventListener('hashchange', () => {
        showSection(window.location.hash);
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }));

        // Allow Esc to close menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Gestion du formulaire de contact via Formspree (AJAX)
    const form = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');
    if (form) {
        form.addEventListener('submit', function (e) {
        e.preventDefault();
        formAlert.textContent = '';
        formAlert.classList.remove('success', 'error');
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                formAlert.textContent = "Merci ! Votre message a bien été envoyé.";
                formAlert.classList.add('success');
            } else {
                response.json().then(data => {
                    if (data.hasOwnProperty('errors')) {
                        formAlert.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formAlert.textContent = "Oups ! Un problème est survenu.";
                    }
                    formAlert.classList.add('error');
                });
            }
        }).catch(error => {
            formAlert.textContent = "Oups ! Un problème est survenu.";
            formAlert.classList.add('error');
        });
        });
    }
});