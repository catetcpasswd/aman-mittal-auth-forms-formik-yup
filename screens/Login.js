import React, { Component, Fragment } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ErrorMessage from "../components/ErrorMessage";

const yupValidationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter the required email address"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(4, "Password must have at least 4 characters")
});

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
    // alert("handleOnLogin " + JSON.stringify(values, 2, null));

    try {
      if (email.length > 0 && password.length > 0) {
        // mimic slow access. disable submit key if this happens
        setTimeout(() => {
          this.props.navigation.navigate("App");
        }, 3000);
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
          initialValues={{ email: "", password: "" }}
          onSubmit={values => {
            this.handleOnLogin(values);
          }}
          validationSchema={yupValidationSchema}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            isSubmitting,
            touched,
            handleBlur
          }) => (
            <Fragment>
              <FormInput
                name="email"
                value={values.email}
                placeholder="Enter email"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                iconName="ios-mail"
                iconColor="@23C384A"
                onBlur={handleBlur("email")}
              />
              {/* <Text style={{ color: "red" }}>{errors.email}</Text> */}
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name="password"
                value={values.password}
                placeholder="Enter password"
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                iconName="ios-lock"
                iconColor="@23C384A"
                secureTextEntry
                onBlur={handleBlur("password")}
              />
              {/* <Text style={{ color: "red" }}>{errors.password}</Text> */}
              <ErrorMessage errorValue={touched.password && errors.password} />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
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
