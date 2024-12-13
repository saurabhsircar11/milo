import { createTag } from '../../utils/utils.js';

export default function init(el) {
  el.classList.add('container');
  const paragraph = createTag('p', null, 'hello world');
  el.append(paragraph);
}
