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

 const MenuScreen = ({navigation}) => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >
  <ScrollView style={styles.innercontainer1}>
      
   <View style={styles.head}>
      
      <Text style={styles.head_text}>My Profile</Text>

   </View>

   <View style={styles.body}>

     <View style={styles.bodyitem}>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=>{  navigation.navigate('Access')}}
          style={styles.box}>

            <View style={styles.bodyitem_inner}>
              <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
              <MaterialCommunityIcons color='#BDBDBD' name='qrcode-scan' size={35} style={{alignSelf:'center'}} />
              <Image style={{height:38, alignSelf:'center', width:38}} source={require('../../assets/icons/cellphone-wireless.png')} />
             
              </View>

                <Text style={[styles.bodyitem_inner_text,{color:'#BDBDBD'}]}>Access(QR / Mobile)</Text>
            </View>
    
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('AccountInformation')}}
          style={styles.box}>
            

          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#BDBDBD' name='account-details' size={50} />

                <Text style={styles.bodyitem_inner_text}>Account Information</Text>
            </View>
              </TouchableHighlight>
     </View>

     <View style={styles.bodyitem}>
     <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
                    onPress={()=> {navigation.navigate('Activity')}}

          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialIcons color='#BDBDBD' name='contact-page' size={50} />

                <Text style={styles.bodyitem_inner_text}>Activity</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('Rewardsandpoints')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
          <MaterialCommunityIcons color='#BDBDBD' name='star-circle' size={50} />
              <Text style={styles.bodyitem_inner_text}>Rewards/Points</Text>
            </View>
              
          </TouchableHighlight>
     </View>


     <View style={styles.bodyitem}>
     <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
     onPress={()=> navigation.navigate('MyPreferences')}
     style={styles.box}>
          <View style={styles.bodyitem_inner}>
            <Image style={{height:40, width:40}} source={require('../../assets/images/shield-account.png')} />
                {/* <MaterialIcons color='grey' name='contact-page' size={50} /> */}

                <Text style={styles.bodyitem_inner_text}>My preferences</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933" 
          onPress={()=> {navigation.navigate('Termsandpolicy')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
          <MaterialCommunityIcons color='#BDBDBD' name='star-circle' size={50} />
              <Text style={styles.bodyitem_inner_text}>Terms & Policies</Text>
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
      marginTop:30
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
      width:'49%',
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
 
 export default MenuScreen;
 
 