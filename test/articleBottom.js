import { createTag } from "./function.js";
import { article } from "./main.js";


export function articleBottomSymptom() {

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
}