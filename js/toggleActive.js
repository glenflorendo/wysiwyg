/**
 * Toggles active class on editable-text
 * @param {Event} event
 */
export default function toggleActive(event) {
  const editableText = event.target.parentElement;
  editableText.classList.toggle('active');
}
