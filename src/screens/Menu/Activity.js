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
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { ProgressBar, Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';

 const Activity = ({navigation}) => {
 


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
      
      <Text style={styles.head_text}>Activity</Text>

   </View>

      <View style={styles.body}>

        <View style={styles.body_item}>

          <Text style={styles.Txt}>Search histroy</Text>
          <Ionicons color='grey' name='caret-forward-sharp' size={20} />
        </View>
        <LinearGradient
                          colors={['#ECF0F1', '#D0D3D4', '#0001' ]}
                          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                          locations={[0.6,0.8, 0.9 ]}
                          style={styles.line}
                        >
                          </LinearGradient>



                          <View style={styles.body_item}>

<Text style={styles.Txt}>Events</Text>
<Ionicons color='grey' name='caret-forward-sharp' size={20} />
</View>
<LinearGradient
                colors={['white', '#D0D3D4', '#0001' ]}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0.6,0.8, 0.9 ]}
                style={styles.line}
              >
                </LinearGradient>



                <View style={styles.body_item}>

<Text style={styles.Txt}>Redemptions</Text>
<Ionicons color='grey' name='caret-forward-sharp' size={20} />
</View>
<LinearGradient
                colors={['white', '#D0D3D4', '#0001' ]}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0.6,0.8, 0.9 ]}
                style={styles.line}

              >
                </LinearGradient>



                <View style={styles.body_item}>

<Text style={styles.Txt}>Bookings</Text>
<Ionicons color='grey' name='caret-forward-sharp' size={20} />
</View>
<LinearGradient
                colors={['white', '#D0D3D4', '#0001' ]}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0.6,0.8, 0.9 ]}
                style={styles.line}

              >
                </LinearGradient>



                <View style={styles.body_item}>

<Text style={styles.Txt}>Services requests</Text>
<Ionicons color='grey' name='caret-forward-sharp' size={20} />
</View>
<LinearGradient
                colors={['white', '#D0D3D4', '#0001' ]}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0.6,0.8, 0.9 ]}
                style={styles.line}

              >
                </LinearGradient>


                <View style={styles.body_item}>

<Text style={styles.Txt}>Logins & logouts</Text>
<Ionicons color='grey' name='caret-forward-sharp' size={20} />
</View>
<LinearGradient
                colors={['white', '#D0D3D4', '#0001' ]}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0.6,0.8, 0.9 ]}
                style={styles.line}

              >
                </LinearGradient>



                <View style={styles.body_item}>

<Text style={styles.Txt}>Privacy Checkup reminders</Text>
<Ionicons color='grey' name='caret-forward-sharp' size={20} />
</View>
<LinearGradient
                colors={['white', '#D0D3D4', '#0001' ]}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0.6,0.8, 0.9 ]}
                style={styles.line}

              >
                </LinearGradient>

       
   <View style={{height:50}}>

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
    color:'#ECF0F1',
    fontSize:15,
    alignSelf:'center'
  },
  line:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    opacity:0.95,
    height:1,
    marginTop:5,
    width: '100%',
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
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
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
      paddingHorizontal:5,
    alignItems:'center'
      
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
 
 export default Activity;
 
 