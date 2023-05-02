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


//main 부분
const article = createTag('article');
main.append(article);
const articleChild = ['h1', 'div'];

article.append(createTag(articleChild))

