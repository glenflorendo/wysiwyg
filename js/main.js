import toggleActive from './toggleActive.js';

document
  .querySelectorAll('.edit-button')
  .forEach(button => button.addEventListener('click', toggleActive));
