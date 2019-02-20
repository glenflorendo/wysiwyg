export default class EditableText extends HTMLElement {
  constructor() {
    super();
    this.toggleActive = this.toggleActive.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <p class="text-element">Go ahead, edit me however you want!</p>

      <wysiwyg-editor></wysiwyg-editor>`;

    this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
    this.addEventListener('delete', this.deleteEditableText);
  }

  toggleActive() {
    this.active = !this.active;
  }

  /**
   * Update text and style of .text-element in real-time
   * @param {Event} event
   */
  handleInput(event) {
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

  get active() {
    return this.hasAttribute('active');
  }

  set active(val) {
    val ? this.setAttribute('active', '') : this.removeAttribute('active');
  }

  deleteEditableText() {
    this.remove();
  }
}
