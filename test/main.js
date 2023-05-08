import { createTag } from "./function.js";


export const main = createTag('main')

export function mainPage() {
  // main 부분
  const article = createTag('article');
  main.append(article);
}