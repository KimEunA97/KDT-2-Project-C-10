const name = "한국"
const url = `https://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?serviceKey=1XHlNsF6Hmgb8Wy1V%2FaTlJLpKD5korFpe6LEawoPDfjIHlM3RJSFRTgo%2BbGckpWv1t%2BS5VQj3%2FK51SWFgSq4oA%3D%3D&pageNo=1&numOfRows=3&ENTP_NAME=${name}&type=json`;

const uri = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=1XHlNsF6Hmgb8Wy1V%2FaTlJLpKD5korFpe6LEawoPDfjIHlM3RJSFRTgo%2BbGckpWv1t%2BS5VQj3%2FK51SWFgSq4oA%3D%3D&pageNo=1&numOfRows=3&entpName=%ED%95%9C%EA%B5%AD%EC%A1%B4%EC%8A%A8&type=json`

console.log(url);

fetch(url).then((data) => { console.dir(data) })