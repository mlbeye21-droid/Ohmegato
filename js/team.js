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
    name: "Alimatou S. Thiam",
    role: "Fondatrice",
    phone: "+221780103050",
    phoneDisplay: "78 010 30 50",
    email: "alimatousadiyathiam@esp.sn",
    website: "ohmegato.sn",
    websiteUrl: "https://www.instagram.com/ohmegato",
    photo: "assets/images/team/alimatou-thiam.jpg"
  },

  "alimatou-thiam": {
    name: "Alimatou S. Thiam",
    role: "Fondatrice",
    phone: "+221780103050",
    phoneDisplay: "78 010 30 50",
    email: "alimatousadiyathiam@esp.sn",
    website: "ohmegato.sn",
    websiteUrl: "https://www.instagram.com/ohmegato",
    photo: "assets/images/team/alimatou-thiam.jpg"
  }

  // exemple pour ajouter un(e) autre employé(e) :
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
