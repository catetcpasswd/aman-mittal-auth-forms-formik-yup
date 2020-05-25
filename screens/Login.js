import React, { Component, Fragment } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

// we will replace Button and TextInput from react-native
// with  our custom Button which uses react-native button as base

class Login extends Component {
  // state = {
  //   email: "",
  //   password: ""
  // };

  // handleEmailChange = email => {
  //   this.setState({ email });
  // };

  // handlePasswordChange = password => {
  //   this.setState({ password });
  // };

  handleOnLogin = async values => {
    const { email, password } = values;
    alert("handleOnLogin " + JSON.stringify(values, 2, null));

    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate("App");
      }
    } catch (error) {
      alert(error);
    }
  };

  goToSignup = () => this.props.navigation.navigate("Signup");

  render() {
    //    const { email, password } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{ email: "ran@dy.com", password: "default1" }}
          onSubmit={values => {
            this.handleOnLogin(values);
          }}
        >
          {({ handleChange, values, handleSubmit }) => (
            <Fragment>
              <FormInput
                name="email"
                value={values.email}
                placeholder="Enter email"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                iconName="ios-mail"
                iconColor="@23C384A"
              />

              <FormInput
                name="password"
                value={values.password}
                placeholder="Enter password"
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                iconName="ios-lock"
                iconColor="@23C384A"
                secureTextEntry
              />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#039BE5"
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <Button
          title="Don't have an account? Sign up now!"
          onPress={this.goToSignup}
          titleStyle={{
            color: "#F57C00"
          }}
          type="clear"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonColor: {
    margin: 25
  }
});

export default Login;
