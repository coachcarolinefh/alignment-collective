// CONFIGURATION: Replace the placeholder below with your actual contact email.
const CONTACT_EMAIL = 'coachcarolinefh@proton.me';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = isOpen ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.textContent = '☰';
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('interest').value = link.dataset.interest;
}));

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = document.getElementById('form-status');
  if (CONTACT_EMAIL === 'hello@example.com') {
    status.textContent = 'Website setup needed: add your real contact email in script.js before publishing.';
    return;
  }
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`CFH Alignment Collective inquiry: ${interest}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\n${message}`);
  status.textContent = 'Your email app should open with a prepared message. Please send it there to complete your inquiry.';
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
