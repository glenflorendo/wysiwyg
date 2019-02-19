import toggleActive from './toggleActive.js';
import handleEventInput from './handleEventInput.js';
import handleAddParagraph from './handleAddParagraph.js';

document
  .querySelectorAll('.edit-button, .save-button')
  .forEach(button => button.addEventListener('click', toggleActive));

document
  .querySelectorAll('.editor')
  .forEach(editor => editor.addEventListener('input', handleEventInput));

document.getElementById('add-button').addEventListener('click', handleAddParagraph);
