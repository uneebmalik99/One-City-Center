import React from "react";
import { createStackNavigator, } from '@react-navigation/stack';
import Welcome from '../screens/Welcome'
 
const { Navigator, Screen } = createStackNavigator();

export default class UnAuthorizedNavigationStack extends React.Component {
  render() {
    return <Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      <Screen name="Welcome" component={Welcome} />
     
      

    </Navigator>;
  }
}