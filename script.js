// Replace this placeholder with your real email address before publishing.
const CONTACT_EMAIL = 'hello@example.com';
const menuButton = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  links.classList.toggle('open', open);
});
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-interest]').forEach(a => a.addEventListener('click', () => {
  document.getElementById('interest').value = a.dataset.interest;
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (CONTACT_EMAIL === 'hello@example.com') {
    status.textContent = 'This prototype needs Caroline’s real contact email configured before messages can be prepared.';
    return;
  }
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('C.F.H. inquiry: ' + interest);
  const body = encodeURIComponent(`Hello Caroline,\n\n${message || 'I would love to learn more.'}\n\nInterest: ${interest}\nName: ${name}\nEmail: ${email}`);
  status.textContent = 'Your email application should open with a prepared message. Please press Send there to deliver it.';
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
