import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  onLogin = async () => {
    const { email, password } = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate("App");
      }
      //alert(JSON.stringify(values,2,null))
    } catch (error) {
      alert(error);
    }
  };

  goToSignup = () => this.props.navigation.navigate("Signup");

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <TextInput
            name="email"
            value={email}
            placeholder="Enter email"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={{ margin: 10 }}>
          <TextInput
            name="password"
            value={password}
            placeholder="Enter password"
            autoCapitalize="none"
            onChangeText={this.handlePasswordChange}
            secureTextEntry
          />
        </View>
        <Button title="Login" onPress={this.onLogin} />
        <Button title="Go to Signup" onPress={this.goToSignup} />
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
