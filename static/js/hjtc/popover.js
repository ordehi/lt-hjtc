import content from '../../../store/content.json' assert { type: 'json' };

function handlePopoverShown(event) {
  let id = '#' + event.target.getAttribute('aria-describedby');
  let popover = document.querySelector(id);
  if (popover) {
    let tooltipEls = popover.querySelectorAll('.line');
    if (tooltipEls) {
      let tooltipList = [...tooltipEls].map((triggerEl) => {
        let tipId = '#' + triggerEl.id;
        const tooltip = bootstrap.Tooltip.getOrCreateInstance(tipId);
        const options = {
          placement: 'top',
          trigger: 'hover focus',
          html: true,
          title: content['tc-lines'][triggerEl.id],
          customClass: 'custom-tooltip',
          delay: { show: 0, hide: 500 },
        };

        tooltip._config = { ...tooltip._config, ...options };
        return tooltip;
      });
    }
  }
}

const popoverTriggerList = document.querySelectorAll('.piece');
const popoverList = [...popoverTriggerList].map((triggerEl) => {
  let id = triggerEl.id;
  const popover = bootstrap.Popover.getOrCreateInstance('#' + id);
  const options = {
    placement: 'top',
    trigger: 'click',
    html: true,
    title: content.pieces[id].title,
    content: content.pieces[id].content,
    customClass: 'custom-popover',
  };

  popover._config = { ...popover._config, ...options };
  triggerEl.addEventListener('shown.bs.popover', (event) =>
    handlePopoverShown(event)
  );
  return popover;
});

const tpRegex = /(tooltip|popover)/;

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    let openList = document.querySelectorAll('.popover');
    if (openList.length) {
      let classList = event.target.parentElement?.classList;
      if (!classList || (classList && !tpRegex.test(classList[0]))) {
        openList.forEach((popover) => {
          let id =
            '#' + document.querySelector(`[aria-describedby=${popover.id}]`).id;
          bootstrap.Popover.getInstance(id).hide();
        });
      }
    }
  });
});
