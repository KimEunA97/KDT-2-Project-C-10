const key = 'https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=IGgBVJ%2BLESbzNUr3Zgld1TwbaTgjXjyTynsCnEDUeuwNeQbN7wrVenFaMf%2Bu%2FfDDDE0G4voIAFzA%2Fw9s37mTmw%3D%3D&pageNo=1&numOfRows=3&type=xml';

fetch(key)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  })