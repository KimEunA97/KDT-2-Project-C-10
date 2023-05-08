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
//약 정보 전체 컨테이너
//상단 : 약명, 정보, 화살표
export const pillSector = createTag('div');
article.children[1].append(pillSector);
