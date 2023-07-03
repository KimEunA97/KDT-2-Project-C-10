

import React from "react";

export default function BoldText(props) {



  return (

    <Text style={styles.customFont}>{props.name}</Text>

  )

}

const styles = {

  customFont: {
    fontSize: 20,
    color: "white"
  }
}