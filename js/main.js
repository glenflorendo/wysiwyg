import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';
import EditableHeading from './components/EditableHeading.js';

import { addHeading, addParagraph } from './addEditables.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);
customElements.define('wysiwyg-editable-heading', EditableHeading);

document.getElementById('add-heading').addEventListener('click', addHeading);
document.getElementById('add-paragraph').addEventListener('click', addParagraph);
