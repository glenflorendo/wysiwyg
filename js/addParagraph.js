export default function addParagraph(event) {
  const newEditableText = document.createElement('wysiwyg-editable-text');
  document.querySelector('main').insertBefore(newEditableText, event.target);
}
