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
   FlatList,
   View,
   Image,
   Text,
   Dimensions,
   StatusBar,
   TouchableOpacity,
   ImageBackground,
 } from 'react-native';
 
 import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../../constance/AppConstance';
import { Tabs, NativeBaseProvider,Box,Heading, Center } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { ProgressBar, Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap } from 'react-native-tab-view';

 const Rewardsandpoints = ({navigation}) => {
   const [progress , setprogress] =useState(0)
   const [indeterminate , setindeterminate] =useState(true)
   const [index, setIndex] = React.useState(0);
   const [Activelist , setActivelist] = useState([
    
        {id:1},
        {id:2},
        {id:3},
        {id:3},
        {id:3}
     ])
   const [routes] = React.useState([
    { key: 'first', title: 'Active' },
    { key: 'second', title: 'UpComing' },
  ]);
  

  const renderlist1 = ({ item, index }) => {

     
    return(
       <View style={styles.listdesign}>
          <View style={styles.listdesign_item_1}>
            <Text style={styles.listdesign_item_1_txt}>Tue, 6 jul 2021</Text>
          </View>

          <View style={styles.listdesign_item_2}>
            <View style={styles.listdesign_item_1_2}> 
              <Text style={styles.listdesign_item_1_txt}>11:01 AM</Text>
              <Text style={styles.listdesign_item_1_txt}>Laundromat</Text>
              <Text style={styles.listdesign_item_1_txt}>+20</Text>
            </View>
            <View style={styles.listdesign_item_1_2}> 
              <Text style={styles.listdesign_item_1_txt}>11:01 AM</Text>
              <Text style={styles.listdesign_item_1_txt}>Laundromat</Text>
              <Text style={styles.listdesign_item_1_txt}>+20</Text>
            </View>
           
          </View>
       </View>
    );



}

  useEffect(() => {

  
    // animate()
    });

    function TabComponent() {
      return (
          <Tabs   colorScheme="orange" isFitted align="center" size="md" my={1}>
            <Tabs.Bar>
              <Tabs.Tab >Points Received</Tabs.Tab>
              <Tabs.Tab>Points used</Tabs.Tab>
            </Tabs.Bar>
            <Tabs.Views>
              <Tabs.View >
                
              {/* <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={Activelist}
                contentContainerStyle={{ width:'100%' ,marginBottom:200   }}
                renderItem={renderlist1}
                keyExtractor={(item,id) => id.toString()}
                 />  */}




  <View style={{height:200}}>  

  </View>
              </Tabs.View>
              <Tabs.View>
              <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={Activelist}
                contentContainerStyle={{ width:'100%' ,   }}
                renderItem={renderlist1}
                keyExtractor={(item,id) => id.toString()}
                 />
              </Tabs.View>
            </Tabs.Views>
          </Tabs>
      );
    }

  
    
    return (
     <>
       <StatusBar barStyle='light-content' />
       <SafeAreaView style={styles.maincontainer}>
    
       <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
    style={styles.Bg}
    >

                      
  <View style={styles.innercontainer1}>
      
   <View style={styles.head}>
      
      <Text style={styles.head_text}>Rewards / Points</Text>

   </View>

   <View style={styles.body}>

        <View style={styles.body_item_1}>
           <Text style={[styles.body_item_1_txt,{fontWeight:'bold'}]}>Membership details</Text>
           <Text style={styles.body_item_1_txt}>Gold</Text>
           <Text style={styles.body_item_1_txt}>632 rewards points</Text>
        </View>


        <View style={styles.body_item_2}>
           <Text style={styles.body_item_2_txt}>View tier rewards / benefits</Text>
           <Ionicons color='grey' name='chevron-forward' size={20} />

        </View>

        {/* <TabView
      navigationState={{ index, routes }}
      sceneContainerStyle={{backgroundColor:'red', }}
            renderScene={renderScene}
      onIndexChange={setIndex}
      indicatorStyle={{ backgroundColor: 'green' }}

      initialLayout={initialLayout}
            /> */}
       <NativeBaseProvider>

  <TabComponent />


</NativeBaseProvider>
        </View>
   
  </View>
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
  listdesign:{
    width:'100%',
    marginVertical:5,
  },
  listdesign_item_1_2:{
    flexDirection:'row',
    marginTop:5,
    justifyContent:'space-between'
  },
  listdesign_item_1:{
    backgroundColor:'#bebebe',
    paddingHorizontal:10,
    paddingVertical:3,
  },
  listdesign_item_1_txt:{
    color:'white'
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
  listdesign_item_2:{
    marginVertical:5,
  },
  body_item_1_txt:{
    color:'white'
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
      marginTop:15,
      width:'100%',
      height:'100%'      
   },
   body_item_1:{
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:'#e8a057',
    paddingVertical:10,
    paddingHorizontal:20,
   },
   body_item_2:{
     paddingVertical:5,
     flexDirection:'row',
     paddingHorizontal:15,
    justifyContent:'space-between',
    backgroundColor:'#d9d9d9'
   },
   body_item_2_txt:{
     color:'#626567'
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
 
 export default Rewardsandpoints;
 
 