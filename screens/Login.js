import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
          title="Go to Signup"
          onPress={() => this.props.navigation.navigate("Signup")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;
