// Toggle menu mobile const navToggle = document.getElementById('nav-toggle'); const navMenu = document.getElementById('nav-menu'); navToggle.addEventListener('click', () => { navMenu.classList.toggle('open'); }); ...
// Navigation SPA basée sur les hash links
function showSection(id) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });
    // Afficher la section cible
    const target = document.querySelector(id);
    if (target) {
        target.style.display = 'block';
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

    // Gestion du formulaire de contact via Formspree (AJAX)
    const form = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');
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
});