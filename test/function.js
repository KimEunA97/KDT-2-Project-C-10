export function createTag(tagName, props, textContent = '') {
  const element = document.createElement(tagName);


  if (props === null) {



  }
  else {


    Object.keys(props).forEach(function (key) {

      element[key] = props[key];
    })
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

