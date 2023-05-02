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
  header.children[0].children[i].innerHTML = categoryText[i]

}

// header.append(createTag('div'));
// const editBtn = ["목록보기", "썸네일보기"]
// for (let i = 0; i < editBtn.length; i++) {

//   const li = createTag('li');
//   header.children[1].append(li)
//   header.children[1].children[i].innerHTML = editBtn[i]

// }
