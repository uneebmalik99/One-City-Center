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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


 const MenuScreen = ({navigation}) => {
   return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >
  <ScrollView style={styles.innercontainer1}>
      
  

   <View style={styles.body}>

     <View style={styles.bodyitem}>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=>{  navigation.navigate('ProfileStack')}}
          style={styles.box}>

            <View style={styles.bodyitem_inner}>
              <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
              <MaterialCommunityIcons color='#ededed' name='account-circle-outline' size={40} style={{alignSelf:'center'}} />
     
              </View>

                <Text style={[styles.bodyitem_inner_text,{color:'#ededed'}]}>Profile</Text>
            </View>
    
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('BuildingStack')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <FontAwesome color='#ededed' name='building-o' size={40} />

                <Text style={styles.bodyitem_inner_text}>Building</Text>
            </View>
              </TouchableHighlight>
    
           <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('BookingStack')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='calendar-clock' size={40} />

                <Text style={styles.bodyitem_inner_text}>Booking</Text>
            </View>
              </TouchableHighlight>
    
    </View>


    <View style={styles.bodyitem}>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=>{  navigation.navigate('Access')}}
          style={styles.box}>

            <View style={styles.bodyitem_inner}>
              <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
              <MaterialCommunityIcons color='#ededed' name='food-fork-drink' size={40} style={{alignSelf:'center'}} />
     
              </View>

                <Text style={[styles.bodyitem_inner_text,{color:'#ededed'}]}>Retail / F&B</Text>
            </View>
    
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('AccountInformation')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='room-service' size={40} />

                <Text style={styles.bodyitem_inner_text}>Concierge</Text>
            </View>
              </TouchableHighlight>
    
           <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('AccountInformation')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialIcons color='#ededed' name='local-offer' size={40} />

                <Text style={styles.bodyitem_inner_text}>Offers / Promotions</Text>
            </View>
              </TouchableHighlight>
    
    </View>




    <View style={styles.bodyitem}>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=>{  navigation.navigate('Access')}}
          style={styles.box}>

            <View style={styles.bodyitem_inner}>
              <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
              <MaterialCommunityIcons color='#ededed' name='calendar-star' size={40} style={{alignSelf:'center'}} />
     
              </View>

                <Text style={[styles.bodyitem_inner_text,{color:'#ededed'}]}>Events</Text>
            </View>
    
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('DirectoryStack')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='card-account-phone-outline' size={40} />

                <Text style={styles.bodyitem_inner_text}>Directory</Text>
            </View>
              </TouchableHighlight>
    
           <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          // onPress={()=> {navigation.navigate('AccountInformation')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='badge-account-horizontal' size={40} />

                <Text style={styles.bodyitem_inner_text}>Visitor Invite </Text>
            </View>
              </TouchableHighlight>
    
    </View>



    <View style={styles.bodyitem}>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=>{  navigation.navigate('NoticesStack')}}
          style={styles.box}>

            <View style={styles.bodyitem_inner}>
              <View style={{flexDirection:'row',width:'99%', justifyContent:'space-evenly'}} >
              <MaterialCommunityIcons color='#ededed' name='bullhorn-outline' size={40} style={{alignSelf:'center'}} />
     
              </View>

                <Text style={[styles.bodyitem_inner_text,{color:'#ededed'}]}>Notices</Text>
            </View>
    
          </TouchableHighlight>
          <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('ServiceStack')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <Entypo color='#ededed' name='tools' size={40} />

                <Text style={styles.bodyitem_inner_text}>Service Requests</Text>
            </View>
              </TouchableHighlight>
    
           <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='clipboard-list-outline' size={40} />

                <Text style={styles.bodyitem_inner_text}>Feedback / Survey</Text>
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
    color:'#ededed',
    textAlign:'center'
   },
   bodyitem_inner:{
    flexDirection:'column',
    alignItems:'center',
    height:'99%',
    width:'99%',
    alignSelf:'center',
    justifyContent:'space-evenly'
   },
   box:{
      borderColor:'#ededed',
      borderWidth:2.1,
      borderRadius:18,
      height:deviceHeight*0.15,
      width:'32%',
      padding:5,
      justifyContent:'center'

   },
   bodyitem:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    marginTop:20
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
 
 