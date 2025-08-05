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