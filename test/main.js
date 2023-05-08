import { createTag } from "./function.js";


export const main = createTag('main')
export const article = createTag('article');

export function mainPage() {
  // main 부분
  main.append(article);
}