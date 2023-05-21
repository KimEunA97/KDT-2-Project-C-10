import React, { useState } from "react";
import { View, TextInput, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ParentComponent from "./pare";

function UserFormFunction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (

    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <ParentComponent></ParentComponent>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: StatusBar.currentHeight,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default UserFormFunction;
