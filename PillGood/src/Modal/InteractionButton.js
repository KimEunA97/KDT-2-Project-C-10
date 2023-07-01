import React from "react";


export default function InteractionButton() {
  const [inputValue, setInputValue] = useState('');

  const handleSendValue = () => {
    setPillName(inputValue);
    setInvisible(false)
    setInputValue('');
  };
  const handleModalFalse = () => {
    setInvisible(false)
    setInputValue('');
  }
  const pressTheCreateBtn = () => {
    setInvisible(true)
  }
  
  return (
    <View style={styles.buttonContainer}>
      {/* 확인버튼 */}
      <TouchableOpacity
        onPress={handleSendValue}
        style={styles.confirmButton}>
        <Text style={styles.confirmText}>확인</Text>
      </TouchableOpacity>
      {/* 취소버튼 */}
      <TouchableOpacity
        onPress={handleModalFalse}
        style={styles.cancelButton}>
        <Text style={styles.cancelText}
        >취소</Text>
      </TouchableOpacity>
    </View>
  )

}