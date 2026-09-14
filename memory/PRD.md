# PRD — LUSAVONZO

## Problème initial (13 sept. 2026)
« 438 923 9052, bizuka70@gmail.com. Fais moi un site web pour menage, industriel, residentiel etc. un gros bouton appeler. plusieurs page, pas tout sur la home page. fais en sorte de faire un prise de contact sans back end le site, donc apres tu redirige vers le mail ou sms, preremplis, fais un beau truc, avec des photos et site animer mais propre »
+ Logo LUSAVONZO fourni (bleu/vert, nettoyage résidentiel et commercial).

## Choix utilisateur
- Pages : Accueil, Services, À propos, Contact
- Contact sans backend : le client choisit SMS (438 923 9052) ou courriel (bizuka70@gmail.com), message prérempli
- Design : liberté totale, moderne, basé sur le logo bleu/vert
- Photos : libres de droits (Unsplash)

## Personas
- Propriétaire de maison/condo (Grand Montréal) qui veut un entretien régulier
- Gérant de commerce/bureau qui veut un entretien pro fiable
- Responsable de site industriel / fin de chantier

## Architecture
- Frontend React (CRA + craco) : routing react-router-dom, framer-motion (scroll reveals, hero kinetic), lenis (smooth scroll), Tailwind + shadcn (accordion FAQ)
- Aucun backend utilisé pour le site (contact 100 % côté client via liens tel:/sms:/mailto:)
- Données centralisées : /app/frontend/src/data/site.js (téléphone, courriel, services, FAQ, témoignages)
- Logo : /app/frontend/public/assets/logo.png

## Implémenté (14 sept. 2026)
- Page Galerie (/galerie) : 13 photos dont les 5 vraies photos du client (salle d'eau AVANT, lavabos AVANT, salle de pause APRÈS, corridor APRÈS, appartement AVANT déménagement), badges « Avant » / « Après » / « Intervention réelle », filtres (Tous, Interventions réelles, Résidentiel, Commercial, Industriel), visionneuse plein écran (lightbox animée), CTA
- Accueil : nouvelle section « Nos réalisations, en vrai » avec 3 vraies photos liées à la galerie
- Menu : lien « Galerie » ajouté (desktop + mobile + pied de page)
- Photos client hébergées localement : /app/frontend/public/assets/gallery/

## Implémenté (13 sept. 2026)
- Accueil : hero cinétique avec révélation ligne par ligne, parallaxe sur image, marquee éditorial, bento services, manifeste numéroté 01-04, estimateur de temps, témoignages + garantie, bannière CTA
- Gros bouton « Appeler (438) 923-9052 » : navbar, hero, bannières, bouton flottant mobile (pulsant)
- Services : filtres par catégorie (animés), 5 services détaillés, tableau comparatif, FAQ accordéon
- À propos : histoire de marque avec logo, 4 piliers, section éco-responsable, zone desservie + horaires
- Contact : formulaire → bascule SMS/courriel → ouvre l'app native avec message prérempli (nom, tél, ville, service, fréquence, détails) ; hub d'accès direct (appel/SMS/courriel) ; pré-sélection du service via ?service=
- Vérifié : navigation 4 pages, filtres, bascule SMS↔courriel, images pertinentes, responsive (menu mobile)

## Backlog priorisé
- P0 : (rien de bloquant)
- P1 : Ajouter les prochaines vraies photos d'interventions au fil des contrats ; vraies photos de l'équipe
- P2 : Avis Google réels ; blog/conseils ménagers (SEO) ; formulaire avec envoi réel via Resend ; version anglaise ; bandeau promo saisonnier
