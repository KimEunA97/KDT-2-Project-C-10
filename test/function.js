export function createTag(tagName, style = {}, textContent = '') {
  const element = document.createElement(tagName);

  if (style) {
    Object.entries(style).forEach(([prop, value]) => {
      element.style[prop] = value;
    });
    
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;

}