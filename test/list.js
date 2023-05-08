import { createTag } from "./function.js";
import { Allstyling } from './style.js'
import { headerPage, header } from "./header.js"
import { main, mainPage } from "./main.js";
import { articleMiddleInfo } from "./articleMiddleInfo.js";
import { articleBottomSymptom } from "./articleBottom.js";

//헤더 부분
headerPage();

//메인 부분
mainPage();

//가운데 약 정보
articleMiddleInfo();

//약 정보 아래쪽. 증상
articleBottomSymptom();

const root = document.getElementById('root');
root.style.width = "100vw";
root.style.maxWidth = "100vw";
root.style.height = "100vh";
root.style.maxHeight = "100vh";


const footer = createTag('footer');
root.append(header, main, footer);





//footer 부분 시작

//약 총 이미지
const pillTotalImageSector = createTag('div');
footer.append(pillTotalImageSector);
const pillTotalImage = createTag('div');
pillTotalImageSector.append(pillTotalImage);
pillTotalImage.innerHTML = "약";

//복용 시간
const pillTimeSector = createTag('div');
footer.append(pillTimeSector);
const pillTimeListContainer = createTag('ul');
pillTimeSector.append(pillTimeListContainer);
const pillTimeTextArr = ["점심약", "남은시간", "1:30"];
pillTimeTextArr.forEach(element => {
  const li = createTag('li')
  pillTimeListContainer.append(li);
  li.innerHTML = element;

});


//완료 버튼
const completeBtnSector = createTag('div')
footer.append(completeBtnSector);
const completeBtn = createTag('h1');
completeBtnSector.append(completeBtn);
completeBtn.innerHTML = "완료"


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