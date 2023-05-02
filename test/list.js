const root = document.getElementById('root');

function createTag(tag) {

  const ele = document.createElement(tag)

  return ele;

}

const header = createTag('header');
const main = createTag('main')
const footer = createTag('footer');

root.append(header, main, footer);

header.append((createTag('ul')))
//상단 카테고리 추가
const categoryText = ["오늘의 약", "타임라인", "검색", "설정"]
for (let i = 0; i < categoryText.length; i++) {

  const li = createTag('li');
  header.children[0].append(li)
  header.children[0].children[i].innerHTML = categoryText[i];

}


const EditBtn = [["목록보기", "썸네일보기"], ["아침", "점심", "저녁"], ["새글쓰기", "플러스버튼"]];
header.append(createTag('div'))
for (let i = 0; i < EditBtn.length; i++) {

  const ul = createTag('ul')
  header.children[1].append(ul)

  EditBtn.forEach(element => {

    element.forEach(text => {

      const li = createTag('li')
      console.log(li)
      li.innerHTML = text;
      ul.appendchi(text)


    })

  });

}
