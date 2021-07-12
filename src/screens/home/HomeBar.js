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
import ac from "../../assets/images/account.png"
import bd from "../../assets/images/office.png"
import cld from "../../assets/images/calendar.png"

import food from "../../assets/images/food.png"
import room from "../../assets/images/room.png"
import tag from "../../assets/images/tag.png"

import cldstar from "../../assets/images/calendar-star.png"
import contact from "../../assets/images/contacts.png"
import news from "../../assets/images/newspaper.png"

import bullet from "../../assets/images/bulletin.png"
import hammer from "../../assets/images/hammer.png"
import clip from "../../assets/images/clipboard.png"




const HomeBar =  () => {
  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>

<View style={styles.iconCol}>
<View style={styles.iconRow}>
    <View style={styles.iconCont}>
    <Image source={ac} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Profile</Text>
    </View>
    
    <View style={styles.iconCont}>
    <Image source={bd} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Building</Text>
    </View>

    <View style={styles.iconCont}>
    <Image source={cld} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Bookings</Text>
    </View>

    

</View>



<View style={styles.iconRow}>
    <View style={styles.iconCont}>
    <Image source={food} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Retail/ F and B</Text>
    </View>
    
    <View style={styles.iconCont}>
    <Image source={room} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Coneirage</Text>
    </View>

    <View style={styles.iconCont}>
    <Image source={tag} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Offers and Promotions</Text>
    </View>

    

</View>


<View style={styles.iconRow}>
    <View style={styles.iconCont}>
    <Image source={cldstar} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Events</Text>
    </View>
    
    <View style={styles.iconCont}>
    <Image source={contact} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Directory</Text>
    </View>

    <View style={styles.iconCont}>
    <Image source={news} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Notes</Text>
    </View>

    

</View>


<View style={styles.iconRow}>
    <View style={styles.iconCont}>
    <Image source={bullet} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Notices</Text>
    </View>
    
    <View style={styles.iconCont}>
    <Image source={hammer} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Services Requests</Text>
    </View>

    <View style={styles.iconCont}>
    <Image source={clip} style={styles.iconImg}></Image>
    <Text style={styles.iconTxt}>Feedback/Survey</Text>
    </View>

    

</View>



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
 iconCol:{
     paddingTop:25,
     flexDirection:'column',
     marginVertical:40,
     marginHorizontal:5,
     
     
 },
 iconRow:{
     flexDirection:'row',
     justifyContent:'space-evenly',
     marginBottom:10
 },
 iconCont:{
     flex:0.3,
     borderColor:'white',
     borderWidth:1,
     borderRadius:4,
     alignItems:'center',
     padding:15,
     },
iconImg:{
},
iconTxt:{
color:'#BDBDBD'
},
}
);

export default HomeBar;