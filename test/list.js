import { createTag } from "./function.js";
import { Allstyling } from './style.js'
const allElements = document.body.getElementsByTagName("*");


const root = document.getElementById('root');
root.width = "100vw";
root.maxWidth = "100vw";
root.height = "100vh";
root.maxHeight = "100vh";

const header = createTag('header', Allstyling.headerStyle);

const main = createTag('main', Allstyling.mainStyle)
const footer = createTag('footer');
root.append(header, main, footer);

//HEADER 부분
header.append((createTag('ul', Allstyling.categoryStyle)))
//상단 카테고리 추가
const categoryText = ["오늘의 약", "타임라인", "검색", "설정"];
for (let i = 0; i < categoryText.length; i++) {

  const li = createTag('li', Allstyling.categoryTextStyle);
  header.children[0].append(li);
  header.children[0].children[i].innerHTML = categoryText[i];

}

//편집버튼
const EditBtn = [["목록보기", "썸네일보기"], ["아침", "점심", "저녁"], ["새글쓰기", "플러스버튼"]];
header.append(createTag('div', Allstyling.editBtnStyle))

EditBtn.forEach(element => {

  const ul = createTag('ul',Allstyling.editBtnStyleContainer);

  element.forEach(text => {

    const li = createTag('li', Allstyling.editBtnStyleContainerText)
    li.innerHTML = text;
    ul.appendChild(li)
  })

  header.children[1].append(ul);

});


// main 부분
const article = createTag('article', Allstyling.articleStyle);
main.append(article);

//article 자식 h1, div
const articleChild = [
  createTag('h1', Allstyling.articleH1Style),
  createTag('div', Allstyling.articleChildStyle),

]

for (let i = 0; i < articleChild.length; i++) {

  article.append(articleChild[i]);
}


//article > div > div
//상단 : 약명, 정보, 화살표
const pillSector = createTag('div',Allstyling.pillSectorStyle);
article.children[1].append(pillSector)

//좌측 약명 컬럼
const leftPillSector = createTag('div');
pillSector.append(leftPillSector);

//타이레놀 컨테이너
const pillNameSector = createTag('div');
leftPillSector.append(pillNameSector);
const pillNameH2 = createTag('h2');
pillNameSector.append(pillNameH2);
pillNameH2.innerHTML = "타이레놀"

//섬네일 컨테이너
const pillThumnailSector = createTag('div');
leftPillSector.append(pillThumnailSector);
const pillThumnail = createTag('div');
pillThumnailSector.append(pillThumnail);
pillThumnail.innerHTML = "thumnail";

//약 정보 컨테이너
const pillDetailSector = createTag('div');
leftPillSector.append(pillDetailSector)
const pillDetailListContainer = createTag('ul');
pillDetailSector.append(pillDetailListContainer);

//약 정보, 내용
const pillDetail = ["처방날짜:", "복용기간:", "용법, 용량:"]
pillDetail.forEach(element => {

  const pillDetailList = createTag('li');
  pillDetailListContainer.append(pillDetailList);
  pillDetailList.innerHTML = element;

});

//가운데 정보
const middleInfo = createTag('div')
pillSector.append(middleInfo);

const middleInfoH3 = createTag('h3');
middleInfo.append(middleInfoH3);
middleInfoH3.innerHTML = "위장운동촉진제";
const middleInfoDetail = createTag('div');
middleInfo.append(middleInfoDetail);
middleInfoDetail.innerHTML = "자몽주스, 오렌지 주스 및 사과주스 등과 복용하지 마세요."

const pillArrow = createTag('div');
pillSector.append(pillArrow);
pillArrow.innerHTML = ">";


//하단, 증상 부분
const bottomTagBox = createTag('div');
article.append(bottomTagBox);
const SymptomSector = createTag('ul');
bottomTagBox.append(SymptomSector);

const symptomArr = ["증상1", "증상2", "증상3", "증상4", "증상5"]
symptomArr.forEach(element => {

  const symptom = createTag('li')
  SymptomSector.append(symptom);
  symptom.innerHTML = element;

});


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

// 모든 요소에 스타일을 적용
for (let i = 0; i < allElements.length; i++) {
  allElements[i].style.margin = 0;
  allElements[i].style.padding = 0;
  allElements[i].style.boxSizing = "border-box";
}

