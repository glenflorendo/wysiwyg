/**
 * Update text and style of .text-element in real-time
 * @param {Event} event
 */
export default function handleEventInput(event) {
  const textElement = event.currentTarget.parentNode.querySelector('.text-element');

  if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
    const text = event.target.value;
    textElement.innerText = text;
  } else {
    const { value, name: styleName } = event.target;
    const unit = event.target.dataset.unit || '';
    textElement.style[styleName] = `${value}${unit}`;
  }
}
