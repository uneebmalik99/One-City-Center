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
} from 'react-native';
import AppConstance, {
 deviceHeight,
 deviceWidth,
} from '../../constance/AppConstance';
import { Tabs, NativeBaseProvider,Box,Heading, Center } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import prof from "../../assets/images/prof.jpg"





const Message2 = ({navigation}) => {

const[msg,setmsg]=useState(false)
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
   const [InActivelist , setInActivelist] = useState([
  
     {id:1},
     {id:2},
     {id:3},

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

const rendermsg = ({ item, index }) => {

   
 return(
    <View style={styles.cardView}>
      <TouchableOpacity
      onPress={()=> setmsg(!msg)}>      
       <View style={styles.profileCol}>
         {/* <MaterialCommunityIcons color='#ededed' name='face-profile' size={40} style={{alignSelf:'flex-start'}}></MaterialCommunityIcons> */}
         <Image source={prof} style={{alignSelf:'flex-start',height: 60,
   width: 60,
   borderRadius: 30,}}></Image>
         <View style={styles.profileRow}>
           <Text style={styles.profileText}>Bloom Flower Botique</Text>
           <Text style={styles.profileText2}>Your flowers are ready for....today</Text>
         </View>

       </View>
       </TouchableOpacity>
    </View>
 );



}

const rendermsglist = ({ item, index }) => {

   
 return(
    <View style={styles.msgListView}>
      <TouchableOpacity
      onPress={()=> setmsg(!msg)}>      
       <View style={styles.msgCol}>
         {/* <MaterialCommunityIcons color='#ededed' name='face-profile' size={40} style={{alignSelf:'flex-start'}}></MaterialCommunityIcons> */}
         <Image source={prof} style={{alignSelf:'flex-start',height: 40,
   width: 40,
   borderRadius: 20,}}></Image>
         <View style={styles.msgRow}>
           <Text style={styles.msgText}>Bloom Flower Botique</Text>
           <Text style={styles.msgText2}>Active 10 minutes ago</Text>
         </View>
         <View style={styles.badge}>
         <Feather color='#ededed' name='phone' size={25} style={{alignSelf:'center'}}></Feather>
           </View>
           
       </View>
       </TouchableOpacity>

       <View style={{alignSelf:'center',paddingVertical:10}}>
         <Text style={{alignSelf:'center',color:'white'}}>Today at 1318</Text>
       </View>

       <View style={{alignSelf:'flex-start', backgroundColor:'white',
       justifyContent:'center',  
       borderRadius:10,
       padding:10,marginVertical:10,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'gray'}}>Your flowers are ready to be picked up</Text>
       </View>

       <View style={{alignSelf:'flex-end', backgroundColor:'#34649c',
       justifyContent:'center',  
       borderTopRightRadius:10,borderTopLeftRadius:10 ,
       padding:15,marginVertical:5,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'white'}}>I will come by the shop around 5pm to pick them up</Text>
       </View>

       <View style={{alignSelf:'flex-end', backgroundColor:'#34649c',
       justifyContent:'center', borderTopRightRadius:10,borderTopLeftRadius:10 ,
       padding:15,marginVertical:5,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'white'}}>Thank You</Text>
       </View>

       <View style={{alignSelf:'flex-start', backgroundColor:'white',
       justifyContent:'center',  
       borderRadius:10,
       padding:10,marginVertical:10,width:'60%'}}>
         <Text style={{alignSelf:'center',color:'gray'}}>Thank you, see you later at 5pm</Text>
       </View>
     
    </View>
 );



}


useEffect(() => {


  // animate()
  });

  function TabComponent() {
    return (
        <Tabs  colorScheme='rgb(82, 190, 128)'  isFitted align="center" size="md" my={1}>
          <Tabs.Bar>
            <Tabs.Tab style={styles.tabTxt}>Chats</Tabs.Tab>
            <Tabs.Tab style={styles.tabTxt}>Notificatons</Tabs.Tab>
          </Tabs.Bar>
          <Tabs.Views>
            <Tabs.View >
              {/* {msg==false ?  */}
              {/* <FlatList
               contentInsetAdjustmentBehavior="automatic"
               data={Activelist}
               contentContainerStyle={{ width:'100%' ,  }}
               renderItem={rendermsg}
               keyExtractor={(item,id) => id.toString()}
              />
              : */}
              <FlatList
               contentInsetAdjustmentBehavior="automatic"
               data={InActivelist}
               contentContainerStyle={{ width:'100%' ,  }}
               renderItem={rendermsglist}
               keyExtractor={(item,id) => id.toString()}
              />
              
              {/* } */}
              {/* <FlatList
               contentInsetAdjustmentBehavior="automatic"
               data={Activelist}
               contentContainerStyle={{ width:'100%' ,  }}
               renderItem={rendermsg}
               keyExtractor={(item,id) => id.toString()}
              /> */}

            </Tabs.View>
            <Tabs.View>
            {/* <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={Activelist}
              contentContainerStyle={{ width:'100%' ,   }}
              renderItem={renderlist1}
              keyExtractor={(item,id) => id.toString()}
               /> */}
               <View style={styles.cardView2}>
               <Text style={styles.notifyTxt}>You have no new notificatons.</Text>
               </View>
            </Tabs.View>
          </Tabs.Views>
        </Tabs>
    );
  }


 
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.maincontainer} >
      <ImageBackground source={require('../../assets/images/bg2.jpeg')} 
   style={styles.Bg}
   >

        {/* <ScrollView> */}

          <TouchableOpacity
          onPress={()=> navigation.navigate('Messages2')}
          style={styles.headCnt}>
            <Text style={styles.headTxt}>Messages</Text>

          </TouchableOpacity>

          <View style={styles.navView}>

          <NativeBaseProvider>

<TabComponent />


</NativeBaseProvider>
   

          </View>

        {/* </ScrollView> */}
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 maincontainer:{
   height:deviceHeight,
   width:deviceWidth,
   flex:1,
   
 },
 Bg:{
   height:deviceHeight,
   width:deviceWidth
 },
 headCnt:{
width:'90%',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#0009',
alignSelf:'center',
marginTop:10,
padding:12,
borderRadius:12,
marginBottom:30

 },
 headTxt:{
   color:'white',
   fontSize:20
 
 },
 navView:{
   width:'90%',
   justifyContent:'center',
   alignItems:'center',
   alignSelf:'center',
   flex:1
 },
 tabTxt:{
   //color:'white'
 },
 cardView:{
   backgroundColor:'white',
   justifyContent:'center',  
   
 },
 profileCol:{
flexDirection:'row',
padding:5,
marginVertical:5
 },
 profileRow:{
flexDirection:'column',
paddingLeft:10,
justifyContent:'center'

 },
 profileText:{
fontSize:15
 },
 profileText2:{
   fontSize:12,
     },
     cardView2:{
       backgroundColor:'#f2f2f2',
       justifyContent:'center',  
       borderRadius:10,
       padding:20
       
     },
     notifyTxt:{
color:'gray'
     },
     msgCol:{
       backgroundColor:'white',
       
       borderRadius:10,
       flexDirection:'row',
       marginVertical:5,
       padding:10
       
       
     },
     msgRow:{
       flexDirection:'column',
       paddingLeft:10,
       justifyContent:'center'
       
         },
     badge:{
       borderRadius:25,
       backgroundColor:'#C64B16',
       justifyContent:'center',
       alignSelf:'flex-end',
       padding:5,
       marginLeft:20

     },
     msgText:{
       fontSize:15,
       textDecorationStyle:'solid'
         },
         msgText2:{
           fontSize:12,
           color:'gray'
             },

});

export default Message2;

