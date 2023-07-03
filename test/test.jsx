import React, { useState } from 'react'

const Test = () => {
  const [state, setState] = useState(false)


  function clicked() {
    setState(true)
  }

  return (
    <div>

      <API></API>

      {state === true && <div clicked={clicked}>window1</div>}
      {state === false && <div>window2</div>}

      <Window1 props={clicked} />


      <div onClick={clicked}>버튼</div>


    </div>
  );
}

const Window1 = (props) => {

  function clickHandler () {
    props.clicked();
  }

  return (
    <div onClick={clickHandler} />
  )
}

export default Test;