import { createTag } from "./function.js";

export function articleMiddle() {
  //가운데 정보
  const middleInfo = createTag('div')
  pillSector.append(middleInfo);

  const middleInfoH3 = createTag('h3');
  middleInfo.append(middleInfoH3);
  middleInfoH3.innerHTML = "위장운동촉진제";
  const middleInfoDetail = createTag('div');
  middleInfo.append(middleInfoDetail);
  middleInfoDetail.innerHTML = "자몽주스, 오렌지 주스 및 사과주스 등과 복용하지 마세요."

  const pillArrow = createTag('div');
  pillSector.append(pillArrow);
  pillArrow.innerHTML = ">";
}