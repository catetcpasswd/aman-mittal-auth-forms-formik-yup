import React from "react";
import { Button } from "react-native-elements";

const FormButton = ({ title, buttonType, buttonColor, disabled, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ borderColor: buttonColor, borderRadius: 20 }}
    titleStyle={{ color: buttonColor }}
    disabled={disabled}
  />
);

export default FormButton;
