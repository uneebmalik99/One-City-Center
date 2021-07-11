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
import bg2 from "../../assets/images/bg2.jpeg"
import logo from "../../assets/images/logo.png"
import m from "../../assets/images/dummy.png"




const HomeTwo =  () => {
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

  <Text style={styles.regText4}>A vaildation link has been sent to this email</Text> 

  </View>

  <View style={styles.regIconVw}>
<Image style={styles.regIcon} source={m}></Image>
<Image style={styles.regIcon2} source={m}></Image>
<Image style={styles.regIcon2} source={m}></Image>
<Image style={styles.regIcon2} source={m}></Image>
  </View>

</ImageBackground></SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',

  },
  image: {
    flex: 1,
  },
 
  tick: {
  marginTop:20,
  alignSelf:"center",
  height:60,
  width:70,
 
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
  padding:10,
  marginTop:10,
  fontSize:20,
  color:'white',
  backgroundColor:'#e41e24',
  borderRadius:9

},
regBtnVw:{
  paddingTop:5,
  marginHorizontal:30,

},
regIconVw:{
flexDirection:'row',
justifyContent:'center',
marginTop:20
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

export default HomeTwo;