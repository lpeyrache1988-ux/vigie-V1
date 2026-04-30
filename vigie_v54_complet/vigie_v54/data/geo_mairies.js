window.VIGIE_GEO = {
  "75001": {
    mairie: { name: "Mairie de Paris Centre", phone: "01 87 76 02 00", hint: "Paris Centre (1er–4e)", url: "https://www.paris.fr/pages/mairie-de-paris-centre-15" }
  },
  "69001": {
    mairie: { name: "Mairie du 1er arrondissement", phone: "04 72 98 75 00", hint: "Lyon 1er", url: "https://www.lyon.fr/mairie-du-1er-arrondissement" }
  },
  "13001": {
    mairie: { name: "Mairie des 1er et 7e arrondissements", phone: "04 91 14 57 00", hint: "Marseille 1er", url: "https://www.marseille.fr/mairie/mairie-1er-7e-arrondissements" }
  }
};

// fallback: page officielle Service-Public (recherche mairie via code postal / commune)
window.VIGIE_GEO_FALLBACK = {
  mairieSearchLabel: "Trouver votre mairie (Service-Public)",
  mairieSearchUrl: "https://lannuaire.service-public.fr/"
};
