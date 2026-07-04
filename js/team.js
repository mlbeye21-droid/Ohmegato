/*
 * Annuaire des employés Ohmegato pour la carte de visite digitale (carte.html).
 *
 * Pour ajouter un(e) employé(e) : dupliquez une entrée ci-dessous avec un
 * identifiant unique (slug), puis partagez le lien carte.html?id=VOTRE_SLUG
 * (QR code, signature email, etc.). Le champ "photo" est optionnel : sans
 * photo, les initiales du nom s'affichent automatiquement. Le champ "phone"
 * sert à la fois pour l'appel et pour WhatsApp (numéro complet avec indicatif).
 */
const OHMEGATO_TEAM = {

  default: {
    name: "Prénom Nom",
    role: "Fonction",
    phone: "+221771234567",
    phoneDisplay: "77 123 45 67",
    email: "prenom.nom@ohmegato.sn",
    website: "ohmegato.sn",
    websiteUrl: "https://www.instagram.com/ohmegato",
    photo: ""
  }

  // exemple :
  // "fatou-diop": {
  //   name: "Fatou Diop",
  //   role: "Responsable Commerciale",
  //   phone: "+221778419948",
  //   phoneDisplay: "77 884 19 48",
  //   email: "fatou.diop@ohmegato.sn",
  //   website: "ohmegato.sn",
  //   websiteUrl: "https://www.instagram.com/ohmegato",
  //   photo: "assets/images/team/fatou-diop.jpg"
  // },

};
