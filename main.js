const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const contactForm = document.getElementById('contact-form');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    portfolioItems.forEach((item) => {
      const category = item.getAttribute('data-category');
      const show = filter === 'all' || category === filter;
      item.style.display = show ? 'flex' : 'none';
    });
  });
});

const validators = {
  name: (value) => value.trim() !== '' || 'Name is required.',
  organization: (value) => value.trim() !== '' || 'Organization is required.',
  role: (value) => value.trim() !== '' || 'Role is required.',
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Enter a valid email.',
  'event-name': (value) => value.trim() !== '' || 'Event name is required.',
  'event-date': (value) => value.trim() !== '' || 'Event date is required.',
  'event-location': (value) => value.trim() !== '' || 'Event location is required.',
  coverage: (value) => value || 'Select at least one coverage type.'
};

const setError = (input, message) => {
  const group = input.closest('.form-group') || input.closest('fieldset');
  const errorEl = group ? group.querySelector('.error') : null;
  if (errorEl) errorEl.textContent = message || '';
};

const validateField = (input) => {
  const name = input.name;
  const value = input.type === 'checkbox' ? input.checked : input.value;
  if (!validators[name]) return true;
  const result = validators[name](input.type === 'checkbox' ? (input.checked ? input.value : '') : input.value);
  const message = result === true ? '' : result;
  setError(input, message);
  return result === true;
};

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    const coverageChecked = contactForm.querySelectorAll('input[name="coverage"]:checked');
    if (!coverageChecked.length) {
      const coverageFieldset = contactForm.querySelector('fieldset');
      setError(coverageFieldset.querySelector('input'), 'Select at least one coverage type.');
      valid = false;
    } else {
      setError(contactForm.querySelector('fieldset input'), '');
    }

    contactForm.querySelectorAll('input, select, textarea').forEach((input) => {
      if (input.type === 'checkbox') return;
      const isValid = validateField(input);
      if (!isValid) valid = false;
    });

    if (!valid) return;

    const messageEl = contactForm.querySelector('.form-message');
    if (messageEl) {
      messageEl.textContent = 'Thank you. Your request has been received. We will get back to you about credentials and coverage.';
    }
    contactForm.reset();
    navToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('open');
    // TODO: Integrate API endpoint or email service for submissions.
  });
}