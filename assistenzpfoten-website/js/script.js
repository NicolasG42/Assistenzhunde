'use strict';
document.documentElement.classList.add('js-ready');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Schließen' : 'Menü';
  nav.classList.toggle('is-open', open);
});
const groups = [...document.querySelectorAll('.nav-group')];
groups.forEach(group => group.addEventListener('toggle', () => {
  if (group.open) groups.forEach(other => { if (other !== group) other.open = false; });
}));
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-group')) groups.forEach(group => { group.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') groups.forEach(group => { group.open = false; });
});

document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const items = [...gallery.querySelectorAll('.gallery-item')];
  const more = gallery.querySelector('[data-more]');
  const count = gallery.querySelector('[data-count]');
  let visible = Math.min(24, items.length);
  function update() {
    items.forEach((item,index) => { item.hidden = index >= visible; });
    if (count) count.textContent = `${visible} von ${items.length} Bildern`;
    if (more) more.hidden = visible >= items.length;
  }
  more?.addEventListener('click', () => {
    const firstNew = visible;
    visible = Math.min(visible + 24, items.length);
    update();
    items[firstNew]?.focus({preventScroll:true});
  });
  update();
});

const lightbox = document.getElementById('lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  let pictures = [], current = 0, trigger = null;
  const photo = lightbox.querySelector('.lightbox-image');
  const caption = lightbox.querySelector('.lightbox-caption');
  const count = lightbox.querySelector('[data-lightbox-count]');
  const show = index => {
    if (!pictures.length) return;
    current = (index + pictures.length) % pictures.length;
    const item = pictures[current], thumb = item.querySelector('img');
    photo.src = item.dataset.full || item.href;
    photo.alt = thumb.alt;
    caption.textContent = item.dataset.caption || thumb.alt;
    count.textContent = `Bild ${current + 1} von ${pictures.length}`;
  };
  document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', event => {
    event.preventDefault();
    trigger = item;
    pictures = [...item.closest('[data-gallery]').querySelectorAll('.gallery-item')];
    show(pictures.indexOf(item));
    lightbox.showModal();
  }));
  lightbox.querySelector('[data-close]').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('[data-previous]').addEventListener('click', () => show(current - 1));
  lightbox.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
  });
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => trigger?.focus());
}

const form = document.getElementById('contact-form');
if (form) {
  const status = form.querySelector('[role="status"]');
  const message = () => {
    const data = new FormData(form);
    const name = `${data.get('first') || ''} ${data.get('last') || ''}`.trim();
    const text = `Name: ${name}\nE-Mail: ${data.get('email') || ''}\nTelefon: ${data.get('phone') || '–'}\n\n${data.get('message') || ''}`;
    return {name,text};
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const {name,text} = message();
    if (status) status.textContent = 'Bitte prüfen und versenden Sie die Nachricht in Ihrem E-Mail-Programm. Falls sich kein Programm öffnet, kopieren Sie die Nachricht und senden Sie sie an iwallon@helfendeassistenzhundepfotenimgrund.de.';
    window.location.href = `mailto:iwallon@helfendeassistenzhundepfotenimgrund.de?subject=${encodeURIComponent('Anfrage von ' + name)}&body=${encodeURIComponent(text)}`;
  });
  document.getElementById('copy-message')?.addEventListener('click', async () => {
    const {text} = message();
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      if (status) status.textContent = 'Nachricht kopiert. Sie können sie jetzt in Ihr E-Mail-Programm einfügen.';
    } catch {
      let copy = document.getElementById('copy-message-text');
      if (!copy) {
        copy = document.createElement('textarea');
        copy.id = 'copy-message-text';
        copy.className = 'copy-message-text';
        copy.setAttribute('aria-label','Nachricht zum Kopieren');
        copy.readOnly = true;
        form.append(copy);
      }
      copy.value = text;
      copy.focus();
      copy.select();
      if (status) status.textContent = 'Der Text ist markiert. Kopieren Sie ihn mit Strg+C beziehungsweise der Kopierfunktion Ihres Geräts.';
    }
  });
}

// The source specifies Monday–Saturday. No Sunday hours are assumed.
document.querySelectorAll('[data-opening-status]').forEach(el => {
  const parts = new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Berlin',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(p => [p.type,p.value]));
  const schedule = {Mon:[840,1200],Tue:[840,1140],Wed:null,Thu:[840,1200],Fri:[840,1200],Sat:[540,780]};
  if (!(values.weekday in schedule)) return;
  const time = Number(values.hour) * 60 + Number(values.minute);
  const hours = schedule[values.weekday];
  const open = hours && time >= hours[0] && time < hours[1];
  el.textContent = `Laut angegebenen Öffnungszeiten: jetzt ${open ? 'geöffnet' : 'geschlossen'}`;
});
