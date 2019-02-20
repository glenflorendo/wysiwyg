export function addHeading(event) {
  const newEditableHeading = document.createElement('wysiwyg-editable-heading');
  document.querySelector('main').insertBefore(newEditableHeading, event.target.parentElement);
}

export function addParagraph(event) {
  const newEditableText = document.createElement('wysiwyg-editable-text');
  document.querySelector('main').insertBefore(newEditableText, event.target.parentElement);
}

export default { addHeading, addParagraph };
