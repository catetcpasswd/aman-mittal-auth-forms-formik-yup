import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation
  },
  {
    initialRouteName: "Auth"
  }
);

const Appcontainer = createAppContainer(SwitchNavigator);

export default Appcontainer;
