/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect } from 'react';
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
   TextInput,
 } from 'react-native';
 import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../constance/AppConstance';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { ProgressBar, Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';

 const AccountInformation = ({navigation}) => {
 


  useEffect(() => {

  
    // animate()
    });
    
    return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    
       <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >
  <ScrollView style={styles.innercontainer1}>
      
   <View style={styles.head}>
      
      <Text style={styles.head_text}>Account Information</Text>

   </View>

      <View style={styles.body}>

        <View style={styles.body_item}>
          <Text style={styles.Txt}>First Name</Text>
          <TextInput  style={styles.Text_input}/>
        </View>

        <View style={styles.body_item}>
          <Text style={styles.Txt}>Last Name</Text>
          <TextInput  style={styles.Text_input}/>
        </View>

        <View style={styles.body_item}>
          <Text style={styles.Txt}>Email Name</Text>
          <TextInput  style={styles.Text_input}/>
        </View>

        <View style={styles.body_item}>
          <Text style={styles.Txt}>Mobile Number</Text>
          <TextInput  style={styles.Text_input}/>
        </View>

        <View style={styles.body_item}>
          <Text style={styles.Txt}>Company Name</Text>
          <TextInput  style={styles.Text_input}/>
        </View>

        <View style={styles.body_item}>
          <Text style={styles.Txt}>Building</Text>
          <TextInput  style={styles.Text_input}/>
        </View>

        <View style={[styles.body_item,{flexDirection:'row',marginTop:20, justifyContent:'space-between'}]}>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.Txt,{fontSize:17, fontWeight:'bold'}]} >Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn ,{backgroundColor:'#00cc66'}]}>
            <Text style={[styles.Txt,{fontSize:17, fontWeight:'bold'}]}  >Save</Text>
          </TouchableOpacity>
      
        </View>

   <View style={{height:100}}>

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
  Txt:{
    color:'white',
    fontSize:16,
    alignSelf:'center'
  },
  btn:{
    backgroundColor:'#d09e01',
    borderRadius:10,
    width:'46%',
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  body_item:{
    marginTop:10,
  },
  Text_input:{
    backgroundColor:'#D0D3D4',
    borderRadius:10,
    fontWeight:'600',
    borderColor:'#626567',
    borderWidth:0.7,
    marginTop:5,
    textAlign:'center'
  },
  QRcontainer:{
    width:'100%',
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  datecontainer:{
    alignItems:'center',
    marginTop:20,
  },
  font_1:{
    fontSize:15,
    marginTop:12,
    color:'grey'
  },
  font_2:{
    color:'grey',
    marginTop:5,
    fontSize:19
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
      marginTop:30,
      width:'100%',
   
      
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
    paddingHorizontal:15,
    width:'100%',
   }
  
 });
 
 export default AccountInformation;
 
 