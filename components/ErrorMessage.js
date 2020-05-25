import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorMessage = ({ errorValue }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    marginLeft: 25
  },
  errorText: {
    color: "red"
  }
});
