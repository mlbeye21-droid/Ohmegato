// Carte de visite digitale — rend les infos de l'employé (js/team.js) et
// génère le fichier vCard pour "Enregistrer dans mes contacts".

const params = new URLSearchParams(window.location.search);
const employeeId = params.get('id') || 'default';
const employee = OHMEGATO_TEAM[employeeId] || OHMEGATO_TEAM.default;

document.title = `${employee.name} — Ohmegato`;

document.getElementById('carteName').textContent = employee.name;
document.getElementById('carteRole').textContent = employee.role;

const photoImg = document.getElementById('cartePhotoImg');
const initialsEl = document.getElementById('carteInitials');
if (employee.photo) {
  photoImg.src = employee.photo;
  photoImg.alt = employee.name;
  photoImg.hidden = false;
  initialsEl.hidden = true;
} else {
  initialsEl.textContent = employee.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

const phoneLink = document.getElementById('cartePhone');
phoneLink.href = `tel:${employee.phone}`;
document.getElementById('cartePhoneText').textContent = employee.phoneDisplay;

const emailLink = document.getElementById('carteEmail');
emailLink.href = `mailto:${employee.email}`;
document.getElementById('carteEmailText').textContent = employee.email;

const whatsappLink = document.getElementById('carteWhatsapp');
whatsappLink.href = `https://wa.me/${employee.phone.replace(/[^\d]/g, '')}`;

const websiteLink = document.getElementById('carteWebsite');
websiteLink.href = employee.websiteUrl;
document.getElementById('carteWebsiteText').textContent = employee.website;

document.getElementById('carteYear').textContent = new Date().getFullYear();

// vCard download ("Enregistrer dans mes contacts")
document.getElementById('carteSave').addEventListener('click', () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${employee.name.split(' ').reverse().join(';')}`,
    `FN:${employee.name}`,
    `TITLE:${employee.role}`,
    'ORG:Ohmegato',
    `TEL;TYPE=CELL:${employee.phone}`,
    `EMAIL:${employee.email}`,
    `URL:${employee.websiteUrl}`,
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${employee.name.replace(/\s+/g, '-')}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
