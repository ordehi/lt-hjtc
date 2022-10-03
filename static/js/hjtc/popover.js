import pieces from '/store/pieces.json' assert { type: 'json' };

const popoverTriggerList = document.querySelectorAll('.piece');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => {
  const popover = new bootstrap.Popover(popoverTriggerEl, {
    placement: 'top',
    trigger: 'click',
    html: true,
    title: pieces[popoverTriggerEl.id].title,
    content: pieces[popoverTriggerEl.id].content,
    customClass: 'custom-popover',
  });

  return popover;
});

// This is where the magic starts happening! At this point, we have a complete and working statement that has some of the barebones functionality that ships with Hotjar.

// Try it out yourself, run this line of code in your browser Console and then try sending anything using the `hj()` function, it can be an Event as you might have seen such as `hj('event', 'my_wondeful_event')` or a flerbo `hj('flerbo', 'bleepbloop')` or even an emoji `hj('🥓', 'tasty')` Unfortunately, sending bacon to Hotjar, or anything not in our APIs, won't do anything once Hotjar is loaded, the command would just be rejected, but it's a cool way to start understanding how Hotjar works under the hood.

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  // $('[data-toggle="popover"]').popover({
  //   placement: 'top',
  //   html: true,
  //   title:
  //     'User Info <a href="#" class="close" data-dismiss="alert">&times;</a>',
  //   content:
  //     '<div class="media"><img src="images/avatar-tiny.jpg" class="mr-3" alt="Sample Image"><div class="media-body"><h5 class="media-heading">Jhon Carter</h5><p>Excellent Bootstrap popover! I really love it.</p></div></div>',
  // });
});
