export default class Editor extends HTMLElement {
  handleDelete = new CustomEvent('delete', {
    bubbles: true,
  });

  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <textarea cols="40" rows="5">${this.parentElement.content}</textarea>

    <section class="styles">
      <div class="form-group">
        <label>
          Font color:
          <input type="color" name="color" />
        </label>
      </div>

      <div class="form-group">
        <label>
          Font size:
          <input
            type="number"
            name="font-size"
            value="16"
            data-unit="px"
          />
          px
        </label>
      </div>

      <div class="form-group">
        <label>
          Font family:
          <select name="font-family">
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
          </select>
        </label>
      </div>

      <button name="delete" type="button" class="delete-button">Delete</button>
    </section>
    
    `;

    this.querySelector('.delete-button').addEventListener('click', event =>
      event.target.dispatchEvent(this.handleDelete),
    );
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
}
