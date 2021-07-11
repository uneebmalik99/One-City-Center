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
import logo from "../../assets/images/logo.png"
import m from "../../assets/images/dummy.png"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { deviceHeight, deviceWidth } from '../../constance/AppConstance';





const Home =  () => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={styles.regView}>
<Image source={logo} style={styles.tick}></Image>
  </View>
 

  <View style={styles.regBtnVw}>
  <Text style={styles.regText}>A vaildation link has been sent to this email</Text>  

  <Text style={styles.regText2}>A vaildation link has been sent to this email</Text>   

  <Text style={styles.regText3}>A vaildation link has been sent to this email</Text> 

    <View style={styles.body_item}>

    <Entypo color='#BDBDBD' name='warning' size={20} style={{alignSelf:'center'}} />

    <Text style={styles.regText4}>A vaildation link has been sent to this email</Text> 

    </View>

  </View>

  <View style={styles.regIconVw}>
    <View style={styles.container_2}>
    <MaterialCommunityIcons color='#BDBDBD' name='newspaper-variant-outline' size={35} style={{alignSelf:'center'}} />
    <Text style={styles.txt}>News</Text>
    </View>

    <View style={styles.container_2}>
    <MaterialCommunityIcons color='#BDBDBD' name='calendar-star' size={35} style={{alignSelf:'center'}} />
    <Text style={styles.txt}>Events</Text>
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
  marginTop:10,
  color:'white',

  backgroundColor:'#e41e24',
  borderRadius:10,

  },
  tick: {
  marginTop:20,
  alignSelf:"center",
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
  backgroundColor:'#e41e24',
  

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