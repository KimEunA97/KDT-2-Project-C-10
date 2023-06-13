import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Modal } from 'react-native';

export default function TodayPillMenu() {

  const [visible, setVisible] = useState(false)

  const modalVisible = () => {
    setVisible(true);
  }

  return (
    <View style={styles.align}>

      <TouchableOpacity
        style={styles.border}
        onPress={modalVisible}>
        <Text>보이기</Text>
      </TouchableOpacity>

      <View>

        <View style={styles.modalSize}>
          <Modal
            visible={visible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>내용</Text>

                <View style={styles.btnContainer}>
                  <TouchableOpacity>
                    <Text>확인</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>취소</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

      </View>
    </View>
  );
}

const styles = {

  align: {
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    width: '80%',
    height: '50%',
    backgroundColor: "#336B66",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "black",
    padding: 5,
    margin: 0,

  },
  modalSize: {

    width : "50%",
    height : "50%"

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'yellow',
    padding: 20,
    borderRadius: 4,
    width: '80%',
    height: '80%'
  },
  btnContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },

}