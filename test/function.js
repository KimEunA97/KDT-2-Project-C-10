export function createTag(tagName, attributes = {}, textContent = '') {
  const element = document.createElement(tagName);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

