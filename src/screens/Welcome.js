/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 



 const Welcome = () => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView>
        <Text>Welcome</Text>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  
   
 });
 
 export default Welcome;
 
 