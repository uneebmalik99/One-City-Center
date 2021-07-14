import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
// import SplashScreen from "react-native-splash-screen";
import Welcome from '../screens/Welcome'
import Home from '../screens/Home/Home'
import Message from '../screens/Messages/Message';
import Event from '../screens/Events/Event';
import Profile from '../screens/Menu/Profile';
import MenuScreen from '../screens/Menu/MenuScreen';

import Icon from '@mdi/react'
import  mdiAccount  from '@mdi/js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Access from '../screens/Menu/Access';
import AccountInformation from '../screens/Menu/AccountInformation';
import Activity from '../screens/Menu/Activity';
import MyPreferences from '../screens/Menu/MyPreferences';
import Rewardsandpoints from '../screens/Menu/Rewardsandpoints';
import Termsandpolicy from '../screens/Menu/Termsandpolicy';
import RegisterActivation from '../screens/registration/RegisterActivation';
import RegisterOne from '../screens/registration/register-Guest/RegisterOne';
import RegisterTwo from '../screens/registration/register-Guest/RegisterTwo';
import RegisterThree from '../screens/registration/register-Guest/RegisterThree';
import RegisterTwoT from '../screens/registration/register-Tenant/RegisterTwoT';
import RegisterOneT from '../screens/registration/register-Tenant/RegisterOneT';
import PaymentOne from '../screens/Payments/PaymentOne';
import PaymenThree from '../screens/Payments/CarparkPayment2';
import CarparkPayment from '../screens/Payments/CarparkPayment';
import FeedbackOne from '../screens/Menu/Feedback/FeedbackOne';
import FeedbackTwo from '../screens/Menu/Feedback/FeedbackTwo';
import Building from '../screens/Menu/Building/Building';
import Booking from '../screens/Menu/Booking/Booking';
import CarparkPayment2 from '../screens/Payments/CarparkPayment2';
import Message2 from '../screens/Messages/Message2';
import Directory from '../screens/Menu/Directory/Directory';
import Notices from '../screens/Menu/Notices/Notices';
import ServiceOne from '../screens/Menu/Services/ServiceOne';
import ServiceTR from '../screens/Menu/Services/ServiceTR';
import ServiceRI from '../screens/Menu/Services/ServiceRI';
import FreeWifi from '../screens/Home/FreeWifi';
import Temperature from '../screens/Home/Temperature';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const CarparkPaymentStack =() =>{
  return(
    <Stack.Navigator>
<Stack.Screen name='CarparkPayment' component={CarparkPayment}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='CarparkPayment2' component={CarparkPayment2}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />


 </Stack.Navigator>

  )
}

const PaymentStack =() =>{ 
  return(
  <Stack.Navigator>
<Stack.Screen name='PaymentOne' component={PaymentOne}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='CarparkPaymentStack' component={CarparkPaymentStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
 <Stack.Screen name='PaymenThree' component={PaymenThree}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

  </Stack.Navigator>
  );
}

const EventStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Event' component={Event}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

  </Stack.Navigator>
  );
}




const HomeStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Home' component={Home}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='FreeWifi' component={FreeWifi}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />


<Stack.Screen name='Temperature' component={Temperature}
options={{
  headerShown:false,
  
}} 
 />



  </Stack.Navigator>
  );
}

const MessageStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Messages' component={Message}
options={{ animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
  headerShown:false,

  
}} 
 />

<Stack.Screen name='Messages2' component={Message2}

options={{animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
  headerShown:false,
  
}} 
 />

  </Stack.Navigator>
  );
}


const NoticesStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Notices' component={Notices}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
  </Stack.Navigator>
  );
}

const FeedbackStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='FeedbackOne' component={FeedbackOne}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
 <Stack.Screen name='FeedbackTwo' component={FeedbackTwo}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
 

  </Stack.Navigator>
  );
}

const ServiceStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='ServiceOne' component={ServiceOne}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='ServiceTR' component={ServiceTR}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='ServiceRI' component={ServiceRI}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

 

  </Stack.Navigator>
  );
}


const BuildingStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Building' component={Building}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

  </Stack.Navigator>
  );
}


const DirectoryStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Directory' component={Directory}
options={{
  headerShown:false,
  
}} 
 />

  </Stack.Navigator>
  );
}

const BookingStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Booking' component={Booking}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

  </Stack.Navigator>
  );
}


const MenuStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='MenuScreen' component={MenuScreen}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='Feedback' component={FeedbackStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='BuildingStack' component={BuildingStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='DirectoryStack' component={DirectoryStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />


<Stack.Screen name='ServiceStack' component={ServiceStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='NoticesStack' component={NoticesStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='BookingStack' component={BookingStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

 

<Stack.Screen name='ProfileStack' component={ProfileStack}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
  
}} 
 />
 
 
 
 
 
 


 
 
 
 

  </Stack.Navigator>
  );
}



const ProfileStack =() =>{
  return(
  <Stack.Navigator>
 

<Stack.Screen name='Profile' component={Profile}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
 <Stack.Screen name='Access' component={Access}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='AccountInformation' component={AccountInformation}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='Activity' component={Activity}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />



<Stack.Screen name='MyPreferences' component={MyPreferences}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
 <Stack.Screen name='Rewardsandpoints' component={Rewardsandpoints}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />

<Stack.Screen name='Termsandpolicy' component={Termsandpolicy}
options={{
  headerShown:false,
  animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),
}} 
 />
 
 
 
 

  </Stack.Navigator>
  );
}







const TabScreen =()=>{
  return(
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'purple',
      keyboardHidesTabBar: true

    }}
    >

    <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel:'Home',
   tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="home" color={color} size={size} />
  )
  
  ,}} />

    <Tab.Screen name="Messages" component={MessageStack} options={{tabBarLabel:'Messages',
   tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="message" color={color} size={size} />
  
  )}} />

    <Tab.Screen name="Payment" component={PaymentStack}  options={{tabBarLabel:'Payment',
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="credit-card-clock-outline" color={color} size={size} />
  )
  }} />
    <Tab.Screen name="Event" component={EventStack} options={{tabBarLabel:'Events',
   tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="calendar-question" color={color} size={size} />
  )
  }}  />
    <Tab.Screen name="Menu" component={MenuStack} options={{tabBarLabel:'Menu',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="menu" color={color} size={size} />
    )
  }} 
   />

    

  </Tab.Navigator>
  );
}

const AppNavigator = () => {
 return (
   <Stack.Navigator 
   initialRouteName="Welcome" 
   >
        
        {/* <Stack.Screen  name='SplashScreen'  component={SplashScreen} options={{headerShown :false}} /> */}
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false, animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),  }} />

        <Stack.Screen name='RegisterActivation' component={RegisterActivation} options={{headerShown:false,animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }), }} />
        <Stack.Screen name='RegisterOne' component={RegisterOne} options={{headerShown:false, animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }), }} />
        <Stack.Screen name='RegisterTwo' component={RegisterTwo} options={{headerShown:false,animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }), }} />
        <Stack.Screen name='RegisterThree' component={RegisterThree} options={{headerShown:false, animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }),}} />
        <Stack.Screen name='RegisterOneT' component={RegisterOneT} options={{headerShown:false,animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }), }} />
        <Stack.Screen name='RegisterTwoT' component={RegisterTwoT} options={{headerShown:false,animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }), }} />
       
     <Stack.Screen name='HomeScreen' component={TabScreen} options={{ headerShown:false, headerTitleAlign:"center",animationEnabled:false,
  transitionConfig: () => ({
    transitionSpec: {
      duration:0,
      timing: 0,
    },
  }), headerLeft: null}} />

   </Stack.Navigator>
 
 );
}

export default AppNavigator;