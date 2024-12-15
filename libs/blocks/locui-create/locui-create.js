import { createTag } from '../../utils/utils.js';

function addListeners() {
  window.addEventListener('message', (event) => {
    // eslint-disable-next-line no-useless-return
    if (event.origin !== 'http://localhost:5173') return;
    window.location.search = event.data;
  });
}
export default function init(el) {
  el.classList.add('container');
  const paragraph = createTag('p', null, 'hello world');
  el.append(paragraph);
  addListeners();
  window.postMessage('loadedWithoutParams', 'https://localhost:5173');
}
