import toggleActive from './toggleActive.js';
import handleEventInput from './handleEventInput.js';

const newEditableTextHTML = `
  <button type="button" class="edit-button">Edit</button>
  <button type="button" class="save-button">Save</button>
  <p class="text-element">Insert new text</p>

  <div class="editor">
    <!-- prettier-ignore -->
    <textarea cols="40" rows="5">Insert new text</textarea>

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
    </section>
  </div>
`;

export default function handleAddParagraph(event) {
  const newEditableText = document.createElement('section');
  newEditableText.className = 'editable-text';
  newEditableText.innerHTML = newEditableTextHTML;

  newEditableText.querySelector('.editor').addEventListener('input', handleEventInput);
  newEditableText
    .querySelectorAll('.edit-button, .save-button')
    .forEach(button => button.addEventListener('click', toggleActive));

  console.log(event.target);
  document.querySelector('main').insertBefore(newEditableText, event.target);
}
