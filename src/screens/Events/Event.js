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
   TouchableOpacity,
 } from 'react-native';
 



 const Event = ({navigation}) => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView>
        <Text>Event</Text>
        <TouchableOpacity
        >
         
        </TouchableOpacity>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  
   
 });
 
 export default Event;
 
 