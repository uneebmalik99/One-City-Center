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
   ImageBackground,
   View,
   Text,
   StatusBar,
   TouchableOpacity,
   TouchableHighlight,
 } from 'react-native';
 
 import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance';


 const Welcome = ({navigation}) => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView>
       
       <ImageBackground source={require('../assets/images/splash2.png')} 
        style={styles.Bg}
        >

          <View style={styles.body}>
            {/* <View sty> */}
              <Text style={styles.txt}>Registration</Text>
            {/* </View> */}

      <View style={{marginTop:30,}}> 
      <TouchableOpacity 
      onPress={()=> {navigation.navigate('RegisterOne')}}
      style={[styles.btn,{backgroundColor:'#7f7f7f'}]}>
              <Text style={[styles.txt,{fontWeight:'500',fontSize:18,  }]}> GUEST ACCESS</Text>
              
              </TouchableOpacity>

            <TouchableOpacity
                  onPress={()=> {navigation.navigate('RegisterOneT')}}

            style={styles.btn}>
            <Text style={[styles.txt,{fontWeight:'500',fontSize:18, textAlign:'center' }]}> TENANT REGISTRATION</Text>

            </TouchableOpacity>
      </View>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('HomeScreen')}}
        >
            <Text>
                Home
            </Text>
        </TouchableOpacity>

       

          </View>


      </ImageBackground>
        
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
  Bg:{
    height:deviceHeight,
    width:deviceWidth,
    alignItems:'center',
    justifyContent:'center'

  },
  body:{
    width:deviceWidth*0.5
  },
  btn:{
    borderWidth:0.7,
    borderColor:'#7f7f7f',
    borderRadius:15,
    marginTop:30,
    height:deviceHeight*0.11,
    justifyContent:'center'
  },
  txt:{
    color:'#e4e4e4',
    fontSize:22,
    fontWeight:'700',
    alignSelf:'center'
  }
   
 });
 
 export default Welcome;
 
 