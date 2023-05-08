import { createTag } from "./function.js";
import { Allstyling } from "./style.js";


export const header = createTag('header', Allstyling);

export function headerPage() {


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

    const ul = createTag('ul', Allstyling.editBtnStyleContainer);

    element.forEach(text => {

      const li = createTag('li', Allstyling.editBtnStyleContainerText)
      li.innerHTML = text;
      ul.appendChild(li)
    })

    header.children[1].append(ul);

  });
};