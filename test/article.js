

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
const pillSector = createTag('div', Allstyling.pillSectorStyle);
article.children[1].append(pillSector)

//좌측 약명 컬럼
const leftPillSector = createTag('div');
pillSector.append(leftPillSector, Allstyling.pillNameSectorStyle);

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