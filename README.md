# 🌐 LimuleTech

Bienvenue sur le dépôt officiel de **LimuleTech**, un site web moderne, dynamique et responsive développé à la main.

...


**LimuleTech** est un site web SPA (Single Page Application) moderne et responsive, proposant des services de développement web, UI/UX design et SEO. Il inclut :

#Navigation dynamique basée sur les hash links

#Animations CSS (transitions, cube 3D animé)

#Mode sombre / clair selon prefers-color-scheme

#Section Contact complète avec carte OpenStreetMap, infos et formulaire via Formspree



---

**🚀 Technologies**

HTML5 & CSS3

JavaScript (vanilla ES6+)

Formspree pour traitement du formulaire

OpenStreetMap pour la carte intégrée



---

**📂 Structure du projet**
```
#LimuleTech/
├── index.html        # point d'entrée de la SPA
├── style.css         # styles globaux et animations
├── script.js         # logique SPA et formulaire
├── deploy.js         # script Node pour déploiement Github Pages
├── README.md         # documentation du projet
├── CNAME             # domaine personnalisé (www.limuletech.com)
├── preview-light.png # capture mode clair
└── preview-dark.png  # capture mode sombre
```

---

**⚙️ Installation**

1. Clone le dépôt :

git clone https://github.com/<TON-UTILISATEUR>/limuletech.git
cd limuletech


2. Installe les dépendances (pour le script de déploiement) :

npm install




---

**🔄 Déploiement**

Le script deploy.js publie automatiquement la branche main sur GitHub Pages.

1. Assure-toi que le remote origin pointe vers ton repo GitHub.


2. Exécute :

node deploy.js



Le script :

Build (ici aucun build step, copie directe)

Push sur gh-pages via la librairie gh-pages

Met à jour ton site à l'URL : https://<TON-UTILISATEUR>.github.io/limuletech/



---

**📬 Formulaire de contact**

Le formulaire POST vers Formspree envoie les messages à : limulehinugera@gmail.com. Après envoi, un message de confirmation est affiché.


---

**🛠️ Personnalisation**

Remplace CNAME par ton domaine si nécessaire.

Modifie deploy.js pour cibler autre chose qu'une branche gh-pages si besoin.



---

##Made with ❤️ by Limule Hinugera


---

--- deploy.js (Node.js)

// Script de déploiement GitHub Pages via GH-Pages

const ghpages = require('gh-pages');
const path = require('path');

const repoURL = 'https://github.com/TON-UTILISATEUR/limuletech.git';

console.log('📦 Déploiement de LimuleTech sur GitHub Pages...');

ghpages.publish(
  path.join(__dirname, '/'), // dossier à publier
  {
    branch: 'gh-pages',
    repo: repoURL,
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.error('❌ Échec du déploiement :', err);
      process.exit(1);
    }
    console.log('✅ Déploiement réussi !');
    console.log(`🔗 Visite https://${repoURL.split('https://github.com/')[1].replace('.git','')}.github.io/limuletech/`);
  }
);

