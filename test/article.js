import { createTag } from "./function.js";
import { article } from "./main.js";

//article 자식 h1, div
const articleChild = [
  createTag('h1'),
  createTag('div'),

]

for (let i = 0; i < articleChild.length; i++) {

  article.append(articleChild[i]);
}


//article > div > div
//상단 : 약명, 정보, 화살표
export const pillSector = createTag('div');
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
