import EditableText from './EditableText.js';

export default class EditableHeading extends EditableText {
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  render() {
    this.innerHTML = `<button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <${this.heading} class="text-element">Go ahead, edit me however you want!</${this.heading}>

      <wysiwyg-editor></wysiwyg-editor>`;

    this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
  }

  get heading() {
    return this.hasAttribute('heading') ? this.getAttribute('heading') : 'h1';
  }

  set heading(val) {
    this.setAttribute('heading', val);
  }

  static get observedAttributes() {
    return ['heading'];
  }
}
