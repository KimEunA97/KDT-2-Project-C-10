import { createTag } from "./function.js";
import { Allstyling } from './style.js'
import { headerPage, header } from "./header.js"
import { main, mainPage } from "./main.js";
import { articleMiddleInfo } from "./articleMiddleInfo.js";
import { articleBottomSymptom } from "./articleBottom.js";
import { articleLeftInfo } from "./articleLeft.js";
import { footer, footerPage } from "./footer.js";



//헤더 부분
headerPage();

//메인 부분
mainPage();

//좌측 약 정보
articleLeftInfo();

//가운데 약 정보
articleMiddleInfo();

//약 정보 아래쪽. 증상
articleBottomSymptom();

//푸터 부분
footerPage();

const root = document.getElementById('root');
root.style.width = "100vw";
root.style.maxWidth = "100vw";
root.style.height = "100vh";
root.style.maxHeight = "100vh";

root.append(header, main, footer);






//모든 ul에 스타일링
const allUlTag = document.querySelectorAll("ul");
for (let i = 0; i < allUlTag.length; i++) {
  allUlTag[i].style.margin = 0;
  allUlTag[i].style.padding = 0;
  allUlTag[i].style.listStyle = "none";

}

const allElements = document.body.getElementsByTagName("*");
// 모든 요소에 스타일을 적용
for (let i = 0; i < allElements.length; i++) {
  allElements[i].style.margin = 0;
  allElements[i].style.padding = 0;
  allElements[i].style.boxSizing = "border-box";
}