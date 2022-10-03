const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// This is where the magic starts happening! At this point, we have a complete and working statement that has some of the barebones functionality that ships with Hotjar.

// Try it out yourself, run this line of code in your browser Console and then try sending anything using the `hj()` function, it can be an Event as you might have seen such as `hj('event', 'my_wondeful_event')` or a flerbo `hj('flerbo', 'bleepbloop')` or even an emoji `hj('🥓', 'tasty')` Unfortunately, sending bacon to Hotjar, or anything not in our APIs, won't do anything once Hotjar is loaded, the command would just be rejected, but it's a cool way to start understanding how Hotjar works under the hood.

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
