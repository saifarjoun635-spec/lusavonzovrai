export const PHONE_DISPLAY = "438 923 9052";
export const PHONE_PRETTY = "(438) 923-9052";
export const PHONE_TEL = "+14389239052";
export const EMAIL = "bizuka70@gmail.com";
export const LOGO_URL = "/assets/logo.png";

export const NAV_LINKS = [
  { name: "Accueil", path: "/", testid: "nav-link-accueil" },
  { name: "Services", path: "/services", testid: "nav-link-services" },
  { name: "À propos", path: "/a-propos", testid: "nav-link-a-propos" },
  { name: "Contact", path: "/contact", testid: "nav-link-contact" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMGx1eHVyeSUyMG1vZGVybiUyMGhvdXNlJTIwaW50ZXJpb3IlMjBicmlnaHQlMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc4OTMzOTg3MXww&ixlib=rb-4.1.0&q=85",
  residentiel: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
  commercial: "https://images.unsplash.com/photo-1758448721162-0c77cf477d6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjbGVhbiUyMGNvbW1lcmNpYWwlMjBvZmZpY2UlMjBidWlsZGluZyUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzg5MzM5ODcxfDA&ixlib=rb-4.1.0&q=85",
  industriel: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
  profondeur: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop",
  eco: "https://images.unsplash.com/photo-1707143598173-944230c2de24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxlY28lMjBmcmllbmRseSUyMGNsZWFuaW5nJTIwcHJvZHVjdHMlMjBnbGFzcyUyMHNwcmF5JTIwYm90dGxlJTIwcGxhbnR8ZW58MHx8fHwxNzg5MzM5ODcxfDA&ixlib=rb-4.1.0&q=85",
  maison: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  bureau: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  cuisine: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
};

export const MARQUEE_ITEMS = [
  "Nettoyage résidentiel",
  "Commerces & bureaux",
  "Locaux industriels",
  "Produits éco-responsables",
  "Service flexible & fiable",
  "Sanitation de pointe",
];

export const CHAPTERS = [
  {
    num: "01",
    title: "Analyse & planification",
    text: "Chaque espace est évalué avant la première intervention. Nous bâtissons un plan sur mesure : surfaces, fréquences, zones sensibles et priorités. Rien n'est laissé au hasard.",
  },
  {
    num: "02",
    title: "Produits éco-certifiés",
    text: "Nous utilisons des produits sûrs et efficaces, sans produits chimiques agressifs. Sécuritaire pour les enfants, les animaux et la qualité de l'air intérieur.",
  },
  {
    num: "03",
    title: "Exécution de précision",
    text: "Une équipe formée, ponctuelle et équipée. Chaque passage suit une méthode éprouvée, du haut vers le bas, des zones propres vers les zones critiques.",
  },
  {
    num: "04",
    title: "Contrôle qualité rigoureux",
    text: "Chaque intervention se termine par une vérification point par point. Notre standard : un espace impeccable, à chaque visite, sans exception.",
  },
];

export const SERVICES = [
  {
    id: "residentiel",
    category: "Résidentiel",
    title: "Résidentiel — intérieur & extérieur",
    desc: "Maisons, condos et appartements. Un entretien régulier ou ponctuel qui redonne à votre intérieur toute sa fraîcheur.",
    img: IMAGES.residentiel,
    tags: ["Maisons", "Condos", "Appartements"],
    features: [
      "Dépoussiérage complet de A à Z",
      "Cuisine et salles de bain assainies",
      "Aspiration et lavage des planchers",
      "Fenêtres intérieures et miroirs",
    ],
  },
  {
    id: "commercial",
    category: "Commercial",
    title: "Commerces, bureaux & locaux",
    desc: "Des espaces professionnels impeccables qui inspirent confiance à vos clients et à vos équipes, jour après jour.",
    img: IMAGES.commercial,
    tags: ["Bureaux", "Commerces", "Copropriétés"],
    features: [
      "Entretien quotidien, hebdomadaire ou sur mesure",
      "Sanitaires et aires communes",
      "Vitres et surfaces vitrées",
      "Interventions hors heures d'ouverture",
    ],
  },
  {
    id: "industriel",
    category: "Industriel",
    title: "Industriel & après-chantier",
    desc: "Usines, entrepôts et fins de chantier. Des interventions musclées, sécuritaires et conformes aux normes.",
    img: IMAGES.industriel,
    tags: ["Usines", "Entrepôts", "Chantiers"],
    features: [
      "Dégraissage et décontamination",
      "Ramassage de débris et poussières fines",
      "Équipement et machinerie industrielle",
      "Conformité et sécurité sur site",
    ],
  },
  {
    id: "profondeur",
    category: "Grand Nettoyage",
    title: "Grand nettoyage & désinfection",
    desc: "Nettoyage de printemps, déménagement ou post-rénovation : une remise à neuf complète, jusque dans les moindres recoins.",
    img: IMAGES.profondeur,
    tags: ["Printemps", "Déménagement", "Post-rénovation"],
    features: [
      "Désinfection complète des surfaces",
      "Détartrage et dégraissage intensif",
      "Murs, plinthes, hottes et joints",
      "Intérieur des appareils électroménagers",
    ],
  },
  {
    id: "eco",
    category: "Éco-responsable",
    title: "Traitement éco-responsable",
    desc: "Un nettoyage en profondeur avec des produits éco-certifiés, sûrs pour votre famille, vos animaux et l'environnement.",
    img: IMAGES.eco,
    tags: ["Éco-certifié", "Sans toxiques", "Air sain"],
    features: [
      "Produits biodégradables et éco-certifiés",
      "Sécuritaire pour enfants et animaux",
      "Amélioration de la qualité de l'air",
      "Zéro résidu chimique agressif",
    ],
  },
];

export const SERVICE_OPTIONS = [
  "Nettoyage résidentiel",
  "Commercial, bureaux & locaux",
  "Industriel & après-chantier",
  "Grand nettoyage & désinfection",
  "Traitement éco-responsable",
  "Autre / à discuter",
];

export const FREQUENCY_OPTIONS = [
  "Une seule fois",
  "Chaque semaine",
  "Aux deux semaines",
  "Chaque mois",
  "À déterminer ensemble",
];

export const TESTIMONIALS = [
  {
    name: "Marie-Claude D.",
    role: "Propriétaire, Laval",
    text: "Équipe ponctuelle, discrète et minutieuse. Ma maison n'a jamais été aussi propre. Je recommande LUSAVONZO les yeux fermés.",
  },
  {
    name: "Sébastien T.",
    role: "Gérant de commerce, Montréal",
    text: "Nos bureaux sont impeccables chaque matin. Service fiable, flexible et vraiment professionnel. Un partenaire en or.",
  },
  {
    name: "Nadia B.",
    role: "Syndic de copropriété",
    text: "Après les travaux, tout était couvert de poussière. LUSAVONZO a tout remis à neuf en une journée. Travail remarquable.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "À quelle fréquence puis-je planifier un nettoyage ?",
    a: "Vous choisissez : une seule fois, chaque semaine, aux deux semaines ou chaque mois. Nous adaptons l'horaire à vos besoins, y compris les soirs et les fins de semaine.",
  },
  {
    q: "Fournissez-vous l'équipement et les produits ?",
    a: "Oui. Nous arrivons avec tout le matériel professionnel nécessaire ainsi que nos produits éco-certifiés. Vous n'avez rien à préparer.",
  },
  {
    q: "Les produits sont-ils sûrs pour les enfants et les animaux ?",
    a: "Absolument. Nous utilisons des produits éco-responsables, biodégradables et sans agents chimiques agressifs. Sûrs pour toute la famille et la qualité de l'air intérieur.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Argent comptant, virement Interac et carte de crédit. La facturation est simple et transparente, sans frais cachés.",
  },
  {
    q: "Quel est le délai pour obtenir une intervention ?",
    a: "En général, nous pouvons intervenir sous 24 à 72 heures selon la demande. Pour les urgences, appelez-nous directement : nous trouvons toujours une solution.",
  },
];
