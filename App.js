/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import Card from './Components/Card'
 import Feedback from './Components/Feedback'
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   ImageBackground
 } from 'react-native';
 
 const App = () => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <View style={styles.container}>
       <ImageBackground source={require('./images/bg.jpg')} resizeMode="cover" style={styles.image}>
       {/* <Card /> */}
        <Feedback />
       </ImageBackground>

       </View>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   image: {
     flex: 1,
     justifyContent: "center"
   },
 });
 
 export default App;
 
 