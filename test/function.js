export function createTag(tagName, props, textContent = '') {
  const element = document.createElement(tagName);

  if (props) {
    Object.keys(props).forEach(function (key) {
      element[key] = props[key];
    })
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;

}