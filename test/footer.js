import { createTag } from "./function.js";

export const footer = createTag('footer');

export function footerPage() {

  //footer 부분 시작

  //약 총 이미지
  const pillTotalImageSector = createTag('div');
  footer.append(pillTotalImageSector);
  const pillTotalImage = createTag('div');
  pillTotalImageSector.append(pillTotalImage);
  pillTotalImage.innerHTML = "약";

  //복용 시간
  const pillTimeSector = createTag('div');
  footer.append(pillTimeSector);
  const pillTimeListContainer = createTag('ul');
  pillTimeSector.append(pillTimeListContainer);
  const pillTimeTextArr = ["점심약", "남은시간", "1:30"];
  pillTimeTextArr.forEach(element => {
    const li = createTag('li')
    pillTimeListContainer.append(li);
    li.innerHTML = element;

  });


  //완료 버튼
  const completeBtnSector = createTag('div')
  footer.append(completeBtnSector);
  const completeBtn = createTag('h1');
  completeBtnSector.append(completeBtn);
  completeBtn.innerHTML = "완료"


}
