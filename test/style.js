

// let allElements = document.body.getElementsByTagName("*");

// // 모든 요소에 스타일을 적용
// for (let i = 0; i < allElements.length; i++) {
//   allElements[i].style.margin = 0;
//   allElements[i].style.padding = 0;
//   allElements[i].style.boxSizing = "border-box";
// }

export class Allstyling {

  //root 스타일
  static rootStyle = {
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    maxHeight: "100vh",
  }
  //header 스타일
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

  //#root>header>ul
  static categoryStyle = {

    width: "inherit",
    height: "100%",

    /* flex */
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  }

  //#root>header>ul>li 
  static categoryTextStyle = {
    border: "1px solid #fff",
    padding: "20px",
    width: "inherit",
    height: "inherit",

  }

  //#root>header>div
  static editBtnStyle = {

    width: "inherit",
    height: "100%",

    position: "relative",
    top: "0px",

    /* flex */
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

  }

  //#root>header>div>ul 
  static editBtnStyleContainer = {
    width: "50%",
    height: "100%",

    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }

  //#root>header>div>ul>li 

  static editBtnStyleContainerText = {
    width: "20 %",
    height: "40 %",
    backgroundColor: "#FF9C9C"

  }

}