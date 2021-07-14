import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground, 
  Image,
} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from '../../assets/images/bg2.jpeg'
import logo from "../../assets/images/logo.jpg"
import m from "../../assets/images/dummy.png"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { deviceHeight, deviceWidth } from '../../constance/AppConstance';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';








const Home =  ({navigation}) => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={{width:'100%', flexDirection:'row'}}>

  <View style={{width:'60%', }}>
  <Image source={logo} style={[styles.tick,{alignSelf:'flex-end'}]}></Image>

  </View>

  <View style={{width:'40%',marginTop:20,flexDirection:'row', justifyContent:'center',alignItems:'center',}}>
  <TouchableOpacity 
  onPress={()=> {navigation.navigate('Temperature')}}
  
  style={{flexDirection:'row'}}>

  <FontAwesome5 color='blue' name='temperature-high' size={18} style={{alignSelf:'center'}} />
<Text style={{color:'blue', fontSize:16}}>35</Text>
<MaterialCommunityIcons color='blue' name='temperature-celsius' size={18} style={{alignSelf:'center'}} />
</TouchableOpacity>
  </View>

  </View>
 

  <View style={styles.regBtnVw}>
 
  <LinearGradient
                          colors={['#3c9bc5', '#8ed2c7' , '#ccf9c9'  ,'#c9e2c5', '#c7cfc3']}
                          start={{x: 0, y: 0}} end={{x: 1, y: 0.2}}

                          locations={[0.3 ,0.5 , 0.65, 0.8 ,0.9 ]}
                          style={{alignItems: 'center',
                          justifyContent: 'flex-start',
                          opacity:0.95,
                          height:60,
                          marginTop:15,
                          paddingHorizontal:10,
                          flexDirection:'row',
                          borderBottomLeftRadius:8,
                          borderBottomRightRadius:8,
                          borderTopLeftRadius:8,
                          borderTopRightRadius:8,
                          width: '100%',}}
                        >

<Text style={[styles.regText4,{width:'90%'}]}>Good morning, Welcome back Adrian Tay</Text> 
                          </LinearGradient>

 
  <View style={[styles.body_item,{backgroundColor:'#43dc9c',marginTop:20,}]}>

<Entypo color='#BDBDBD' name='warning' size={20} style={{alignSelf:'center', width:'10%'}} />

<Text style={[styles.regText4,{width:'90%'}]}> Your maintenance request has been completed</Text> 

</View>


<View style={[styles.body_item,{backgroundColor:'#e2e24c',opacity:0.6}]}>

<Ionicons color='#BDBDBD' name='alert-circle' size={30} style={{alignSelf:'center', width:'10%'}} />

<Text style={[styles.regText4,{width:'90%'}]}>Please update your passport and email address</Text> 

</View>

 <View style={styles.body_item}>

<Entypo color='#BDBDBD' name='warning' size={20} style={{alignSelf:'center', width:'10%'}} />

<Text style={[styles.regText4,{width:'90%'}]}>Notice : There will be maintenance work carried out at carpark basement A exit today from 0900 - 1700, please use entry C to access carpark basement</Text> 

</View>

  </View> 

  <View style={styles.regIconVw}>
    <TouchableOpacity 
    onPress={()=> navigation.navigate('FreeWifi')}
    style={styles.container_2}>
    <MaterialCommunityIcons color='#BDBDBD' name='wifi' size={35} style={{alignSelf:'center'}} />
    <Text style={styles.txt}>Free WIFI</Text>
    </TouchableOpacity>

    <View style={styles.container_2}>
    <MaterialCommunityIcons color='#BDBDBD' name='calendar-clock' size={35} style={{alignSelf:'center'}} />
    <Text style={styles.txt}>Bookings</Text>
    </View>
     
    <View style={styles.container_2}>
    <MaterialIcons color='#BDBDBD' name='local-offer' size={35} style={{alignSelf:'center'}} />
    <Text style={styles.txt}>Offers/Promotion</Text>
    </View>

    <View style={styles.container_2}>
    <MaterialCommunityIcons color='#BDBDBD' name='room-service-outline' size={35} style={{alignSelf:'center'}} />
    <Text style={styles.txt}>Services</Text>
    </View>

  </View>






 

</ImageBackground></SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: deviceHeight,
    width: deviceWidth,

  },
  container_2:{
          width:'25%'

  },
  image: {
    flex: 1,
  },
  body_item:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:5,
    opacity:0.7,
  marginTop:10,
  color:'white',

  backgroundColor:'#e41e24',
  borderRadius:10,

  },
  tick: {
  marginTop:20,
  height:60,
  width:70,
 
},
txt:{
fontWeight:'bold',
color:'#BDBDBD',
marginTop:7,
textAlign:'center'


},

regText:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#bfe7ef',
  borderRadius:9

},
regText2:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#51dab2',
  borderRadius:9

},
regText3:{
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#e4db4e',
  borderRadius:9

},
regText4:{
  fontSize:16,
  color:'white',
  alignSelf:'center',
  

},
regBtnVw:{
  paddingTop:5,
  marginHorizontal:20,
},
regIconVw:{
flexDirection:'row',
justifyContent:'space-evenly',
marginTop:40,
width:'80%',
alignSelf:'center'
},
regIcon:{
height:50,
width:50
},
regIcon2:{
  marginLeft:30,
height:50,
width:50
}

}
);

export default Home;