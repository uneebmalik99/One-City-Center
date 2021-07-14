import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';
import AppConstance, {
 deviceHeight,
 deviceWidth,
} from '../../../constance/AppConstance';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';







const ServiceMenu = ({navigation}) => {



 
  return (
    <>
      
      <SafeAreaView style={styles.maincontainer} >
     

        <ScrollView>

        <View style={styles.cardViewMenu}>
                <View style={styles.menuCol}>
                  <View style={styles.menuRow}>  
                  <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='briefcase' size={40} />
                <Text style={styles.bodyitem_inner_text}>Office</Text>
                <Text style={styles.bodyitem_inner_text2}>Maintenance, Lights...</Text>
            </View>
              </TouchableHighlight>      

               <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='toilet' size={40} />

                <Text style={styles.bodyitem_inner_text}>Restrooms</Text>
                <Text style={styles.bodyitem_inner_text2}>Sink, Flush, Leaks...</Text>
            </View>
              </TouchableHighlight>  

               <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='dumbbell' size={40} />

                <Text style={styles.bodyitem_inner_text}>Gym</Text>
                <Text style={styles.bodyitem_inner_text2}>Equipment, Locker...</Text>
            </View>
              </TouchableHighlight>     
                   </View>


                   <View style={styles.menuRow}>  
                  <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='elevator-passenger' size={40} />
                <Text style={styles.bodyitem_inner_text}>Elevator</Text>
                <Text style={styles.bodyitem_inner_text2}>Screen, Light, Button...</Text>
            </View>
              </TouchableHighlight>      

               <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='parking' size={40} />

                <Text style={styles.bodyitem_inner_text}>Carpark</Text>
                <Text style={styles.bodyitem_inner_text2}>Barrier, Speaker, Tick...</Text>
            </View>
              </TouchableHighlight>  

               <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='tree' size={40} />

                <Text style={styles.bodyitem_inner_text}>Garden</Text>
                <Text style={styles.bodyitem_inner_text2}>Lamp, Pathway, Gate...</Text>
            </View>
              </TouchableHighlight>     
                   </View>


                   <View style={styles.menuRow}>  
                  <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='elevator-passenger' size={40} />
                <Text style={styles.bodyitem_inner_text}>Public Area</Text>
                <Text style={styles.bodyitem_inner_text2}>Window, Glass wall...</Text>
            </View>
              </TouchableHighlight>      

               <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <MaterialCommunityIcons color='#ededed' name='security' size={40} />

                <Text style={styles.bodyitem_inner_text}>Security</Text>
                <Text style={styles.bodyitem_inner_text2}>Alarm, smoke detector...</Text>
            </View>
              </TouchableHighlight>  

               <TouchableHighlight
          activeOpacity={0.1}
          underlayColor="#ff9933"
          //onPress={()=> {navigation.navigate('Feedback')}}
          style={styles.box}>
          <View style={styles.bodyitem_inner}>
                <AntDesign color='#ededed' name='message1' size={40} />

                <Text style={styles.bodyitem_inner_text}>Others</Text>
                <Text style={styles.bodyitem_inner_text2}>Vendimg machine, Dis...</Text>
            </View>
              </TouchableHighlight>     
                   </View>


                </View>
              </View>

        </ScrollView>
      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 maincontainer:{
   height:deviceHeight,
   width:deviceWidth,
   flex:1,
   marginVertical:40
   
 },
    bodyitem_inner_text:{
    fontSize:14,
    color:'#ededed',
    textAlign:'center'
   },
   bodyitem_inner_text2:{
    fontSize:10,
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
menuCol:{
  flexDirection:'column',
  alignSelf:'center',
},
menuRow:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  flex:0.3,
  padding:5,
  width:'90%'
},
cardViewMenu:{
backgroundColor:'white',
justifyContent:'center', 
height:'90%' ,
width:deviceWidth,
alignSelf:'center',
alignItems:'center'

},

});

export default ServiceMenu;

