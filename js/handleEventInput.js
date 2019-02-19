/**
 * Update text of .text-element in real-time
 * @param {Event} event
 */
export default function handleEventInput(event) {
  if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
    const text = event.target.value;
    const textElement = event.currentTarget.parentNode.querySelector('.text-element');
    textElement.innerText = text;
  }
}
