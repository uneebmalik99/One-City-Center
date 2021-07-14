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
   Image,
   Text,
   StatusBar,
   TouchableOpacity,
   ImageBackground,
   TouchableHighlight,
 } from 'react-native';
 
 import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../constance/AppConstance';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

 const PaymentOne = ({navigation}) => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >
  <ScrollView style={styles.innercontainer1}>


   <View style={styles.body}>
     
   <View style={styles.head}>
      
      <Text style={styles.head_text}>Payments</Text>

   </View>

     <View style={[styles.bodyitem,{marginTop:40}]}>
     <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('AccountInformation')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#BDBDBD' name='credit-card-scan' size={50} />

                <Text style={styles.bodyitem_inner_text}>Scan to pay</Text>
            </View>
              </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('AccountInformation')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#BDBDBD' name='bank' size={50} />

                <Text style={styles.bodyitem_inner_text}>Bank Transfer</Text>
            </View>
              </TouchableHighlight>
     </View>

     <View style={styles.bodyitem}>
     <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
                    onPress={()=> {navigation.navigate('CarparkPaymentStack')}}

          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <Image  style={{width:50,height:50}} source={require('../../assets/images/parking.png')}/>
                <Text style={styles.bodyitem_inner_text}>Carpark Payment</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('Rewardsandpoints')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
          <MaterialCommunityIcons color='#BDBDBD' name='plus-circle-multiple' size={50} />
              <Text style={styles.bodyitem_inner_text}>Subscription Fees</Text>
            </View>
              
          </TouchableHighlight>
     </View>


     <View style={styles.bodyitem,{alignItems:'center', marginTop:10}}>
     <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
     onPress={()=> navigation.navigate('MyPreferences')}
     style={styles.box}>
          <View style={styles.bodyitem_inner}>
            <Image style={{height:40, width:40}} source={require('../../assets/images/credit.png')} />
                {/* <MaterialIcons color='grey' name='contact-page' size={50} /> */}

                <Text style={styles.bodyitem_inner_text}>Transactions</Text>
            </View>
            </TouchableHighlight>
            
      
     </View>
     
   </View>

  </ScrollView>
     
    </ImageBackground>
       
       
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  maincontainer:{
    height:deviceHeight,
    width:deviceWidth,
  },
   Bg:{
     height:deviceHeight,
     width:deviceWidth
   },
   head:{
     backgroundColor:'#0008',
     paddingVertical:10,
     borderRadius:10,
     alignItems:'center',    
   },
   body:{
      marginTop:10
   },
   bodyitem_inner_text:{
    fontSize:14,
    color:'#BDBDBD',
    textAlign:'center'
   },
   bodyitem_inner:{
    flexDirection:'column',
    alignItems:'center',
    height:'80%',
    width:'85%',
    alignSelf:'center',
    justifyContent:'space-evenly'
   },
   box:{
      backgroundColor:'#262626',
      borderRadius:25,
      height:deviceHeight*0.21,
      width:'48%',
      padding:10,
      justifyContent:'center'

   },
   bodyitem:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    marginTop:10
   },
   head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
   innercontainer1:{
    paddingVertical:20,
    paddingHorizontal:15
   }
  
 });
 
 export default PaymentOne;
 
 