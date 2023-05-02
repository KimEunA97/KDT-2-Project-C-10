const root = document.getElementById('root');

function createTag(tag) {

  const ele = document.createElement(tag)
  return ele;
}

const header = createTag('header');
const main = createTag('main')
const footer = createTag('footer');
root.append(header, main, footer);

//HEADER 부분
header.append((createTag('ul')))
//상단 카테고리 추가
const categoryText = ["오늘의 약", "타임라인", "검색", "설정"]
for (let i = 0; i < categoryText.length; i++) {

  const li = createTag('li');
  header.children[0].append(li)
  header.children[0].children[i].innerHTML = categoryText[i];

}

//편집버튼
const EditBtn = [["목록보기", "썸네일보기"], ["아침", "점심", "저녁"], ["새글쓰기", "플러스버튼"]];
header.append(createTag('div'))

EditBtn.forEach(element => {

  const ul = createTag('ul');

  element.forEach(text => {

    const li = createTag('li')
    li.innerHTML = text;
    ul.appendChild(li)

  })

  header.children[1].append(ul);

});


// main 부분
const article = createTag('article');
main.append(article);

//article 자식 h1, div
const articleChild = [
  createTag('h1'),
  createTag('div'),

]
for (let i = 0; i < articleChild.length; i++) {

  article.append(articleChild[i]);
}

console.dir(articleChild)
//article > div > div
//상단 : 약명정보, 화살표
const pillSector = createTag('div');
articleChild[1].append(pillSector);

//좌측 약명 컬럼
const leftPillSector = createTag('div');

const pillNameSector = createTag('div');
leftPillSector.append(pillNameSector);

const pillNameH2 = createTag('h2');
pillNameSector.append(pillNameH2);

const pillThumnailSector = createTag('div');

const pillThumnail = createTag('div');
pillThumnailSector.append(pillThumnail);