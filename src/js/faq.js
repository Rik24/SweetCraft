import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqRefs = {
  faqAccordion: document.querySelector('.js-faq-accordion'),
};

new Accordion('.js-faq-accordion', {
  elementClass: 'js-faq-ac',
  triggerClass: 'js-faq-ac-trigger',
  panelClass: 'js-faq-ac-panel',
  duration: 300,
  showMultiple: false,
  openOnInit: [0],
});
