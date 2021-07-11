// import React from "react";
// import { createStackNavigator, } from '@react-navigation/stack';
// import Welcome from '../screens/Welcome'
// import Home from "../screens/Home/Home";
// import Home2 from "../screens/Home/Home2";
 
// const { Navigator, Screen } = createStackNavigator();

// export default class UnAuthorizedNavigationStack extends React.Component {
//   render() {
//     return <Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
//       <Screen name="Welcome" component={Welcome} />
//       <Screen name="Home" component={Home} />
     
//     <Screen name='AppDrawerScreen' component={TabScreen} options={{ headerShown:false, headerTitleAlign:"center", headerLeft: null}} /> 


//     </Navigator>;
//   }
// }



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
// import SplashScreen from "react-native-splash-screen";
import Welcome from '../screens/Welcome'
import Home from '../screens/Home/Home'
import Home2 from '../screens/Home/Home2'
import Message from '../screens/Messages/Message';
import Payment from '../screens/Payments/Payment';
import Event from '../screens/Events/Event';
import Profile from '../screens/Menu/Profile';
import MenuScreen from '../screens/Menu/MenuScreen';

import Icon from '@mdi/react'
import  mdiAccount  from '@mdi/js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



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


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const StackAuctions = createStackNavigator();
// const StackInvoice =createStackNavigator();


// const StackAuctionsScreen =() =>{
//   return(
//   <StackAuctions.Navigator>
// <StackAuctions.Screen name='Auctions' component={Auctions}
// options={{
//   headerShown:false,
// }} 
//  />
// <StackAuctions.Screen name='AuctionDetails' component={AuctionDetails} options={{
//   title: 'Offer Details',
//   headerTitleAlign:"center",

// }}/>
//   </StackAuctions.Navigator>
//   );
// }

// const StackInvoiceScreen =() =>{
//   return(
//     <StackInvoice.Navigator>
// <StackInvoice.Screen name='Invoice' component={Invoice}
// options={{
//   headerShown:false,
// }} 
 

// />
// <StackInvoice.Screen name='InvoiceDetails' component={InvoiceDetails}
// options={{
//   title:'Invoice Details',
//   headerStyle: {
//             backgroundColor: '#268ef5',
     
//           },
//           headerTitleAlign:"center",
//           headerTitleStyle: {
//             color:'white' ,
//           },
// }}
// // options={{
// //   headerShown:false,
// // }} 
//   />

// <StackInvoice.Screen name='InvoiceDetails2' component={InvoiceDetails2}
// options={{
//   title:'Invoice Details',

//   headerStyle: {
//             backgroundColor: '#268ef5',
     
//           },
//           headerTitleAlign:"center",
         
//           headerTitleStyle: {
//             color:'white' ,
//           },
// }}
// // options={{
// //   headerShown:false,
// // }} 
//   />

//   </StackInvoice.Navigator>
//   );
// }
const PaymentStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Payment' component={Payment}
options={{
  headerShown:false,
  
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
  
}} 
 />

  </Stack.Navigator>
  );
}

const MessageStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Messages' component={Message}
options={{
  headerShown:false,
  
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
}} 
 />

<Stack.Screen name='Profile' component={Profile}
options={{
  headerShown:false,
  
}} 
 />
 <Stack.Screen name='Access' component={Access}
options={{
  headerShown:false,
  
}} 
 />

<Stack.Screen name='AccountInformation' component={AccountInformation}
options={{
  headerShown:false,
  
}} 
 />

<Stack.Screen name='Activity' component={Activity}
options={{
  headerShown:false,
  
}} 
 />



<Stack.Screen name='MyPreferences' component={MyPreferences}
options={{
  headerShown:false,
  
}} 
 />
 <Stack.Screen name='Rewardsandpoints' component={Rewardsandpoints}
options={{
  headerShown:false,
  
}} 
 />

<Stack.Screen name='Termsandpolicy' component={Termsandpolicy}
options={{
  headerShown:false,
  
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
    <MaterialIcons name="payment" color={color} size={size} />
  )
  }} />
    <Tab.Screen name="Event" component={EventStack} options={{tabBarLabel:'Events',
   tabBarIcon: ({ color, size }) => (
    <FontAwesome name="calendar-check-o" color={color} size={size} />
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
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false, }} />
        <Stack.Screen name='RegisterActivation' component={RegisterActivation} options={{headerShown:false, }} />
        <Stack.Screen name='RegisterOne' component={RegisterOne} options={{headerShown:false, }} />
        <Stack.Screen name='RegisterTwo' component={RegisterTwo} options={{headerShown:false, }} />
        <Stack.Screen name='RegisterThree' component={RegisterThree} options={{headerShown:false, }} />
        <Stack.Screen name='RegisterOneT' component={RegisterOneT} options={{headerShown:false, }} />
        <Stack.Screen name='RegisterTwoT' component={RegisterTwoT} options={{headerShown:false, }} />
       
     <Stack.Screen name='HomeScreen' component={TabScreen} options={{ headerShown:false, headerTitleAlign:"center", headerLeft: null}} />

   </Stack.Navigator>
 
 );
}

export default AppNavigator;