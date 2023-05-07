

let allElements = document.body.getElementsByTagName("*");

// 모든 요소에 스타일을 적용
for (let i = 0; i < allElements.length; i++) {
  allElements[i].style.margin = 0;
  allElements[i].style.padding = 0;
  allElements[i].style.boxSizing = "border-box";
}

export class Allstyling {

  static rootStyle = {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    maxHeight: "100vh",
  }

  static headerStyle = {
    width: "inherit",
    height: "10vh",
    backgroundColor: "#55b0aa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",

    position: "sticky",
    top: 0,
  }
}