import toggleActive from './toggleActive.js';
import handleEventInput from './handleEventInput.js';

document
  .querySelectorAll('.edit-button, .save-button')
  .forEach(button => button.addEventListener('click', toggleActive));

document
  .querySelectorAll('.editor')
  .forEach(editor => editor.addEventListener('input', handleEventInput));
