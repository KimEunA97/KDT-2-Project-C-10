import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchPillData = ({ name }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 호출
    const pillName = "일동제약"
    const url = `https://apis.data.go.kr/1471000/MdcinGrnIdntfcInfoService01/getMdcinGrnIdntfcInfoList01?serviceKey=IGgBVJ%2BLESbzNUr3Zgld1TwbaTgjXjyTynsCnEDUeuwNeQbN7wrVenFaMf%2Bu%2FfDDDE0G4voIAFzA%2Fw9s37mTmw%3D%3D&pageNo=1&numOfRows=3&ENTP_NAME=${pillName}&type=json`;

    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [name]);

  const entpName = data ? data.body.items[0].ENTP_NAME : null;

  return entpName;
};

export default FetchPillData;
