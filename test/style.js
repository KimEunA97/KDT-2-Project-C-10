let allElements = document.body.getElementsByTagName("*");

// 모든 요소에 스타일을 적용
for (let i = 0; i < allElements.length; i++) {
  allElements[i].style.margin = 0;
  allElements[i].style.padding = 0;
  allElements[i].style.boxSizing = "border-box";
}