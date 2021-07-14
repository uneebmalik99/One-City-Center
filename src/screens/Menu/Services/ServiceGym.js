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
  TextInput,
} from 'react-native';
import AppConstance, {
 deviceHeight,
 deviceWidth,
} from '../../constance/AppConstance';
import { Tabs, NativeBaseProvider,Box,Heading, Center } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ServiceMenu from "./ServiceMenu";
import AntDesign from 'react-native-vector-icons/AntDesign';






const ServiceGym = ({navigation}) => {

const countries = ["Tennant Request"]

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
        <Tabs   colorScheme="orange" isFitted align="center" size="md" my={1}>
          <Tabs.Bar>
            <Tabs.Tab style={styles.tabTxt}>New Issue</Tabs.Tab>
            <Tabs.Tab style={styles.tabTxt}>Submitted Issues          <View style={styles.badge}>
          <Feather color='#ededed' name='phone' size={12} style={{alignSelf:'center'}}></Feather>
            </View></Tabs.Tab>
          </Tabs.Bar>
          <Tabs.Views>
            <Tabs.View >
              {msg==false ? (<View style={styles.cardView}>
                  <Text style={styles.gymHead}>GYM</Text>
                  <Text style={styles.gymText}>Floor / Area</Text>
                  <TextInput style={styles.gymInput}></TextInput>

                  <Text style={styles.gymText}>Issue</Text>
                  <TextInput style={styles.gymInput}></TextInput>

                  <Text style={styles.gymText}>Upload Photo</Text>
                  <TextInput style={styles.gymInput}></TextInput>

                  <Text style={styles.gymText}>Comment</Text>
                  <TextInput style={styles.gymCmnt}></TextInput>
                  <TouchableOpacity style={styles.gymBtn}>
                    <Text style={styles.gymBtnTxt}>Submit</Text>
                  </TouchableOpacity>
              </View>):(<View style={styles.cardViewMenu}>
              </View>
)}
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
               <Text style={styles.notifyTxt}>Your maintenance request has been completed.</Text>
               <Text style={styles.notifyTxt2}>Gym Locker Repair Sceduled on 10.27.21.</Text>
               <Text style={styles.notifyTxt2}>Office on level 3, Unit 10-03, Maintenance date pending...</Text>
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
      <ImageBackground source={require('../../../assets/images/bg2.jpeg')} 
   style={styles.Bg}
   >

        <ScrollView>

          <View style={styles.headCnt}>
            
            <Image style={{alignSelf:'center',  height:40,
  width:50,
       }} 
            source={require('../../../assets/images/logo.png')}></Image>

          </View>
          <View style={styles.pickCont}>
          <SelectDropdown
         
          dropdownStyle={styles.head_text2}
            buttonTextStyle={styles.head_text}
          defaultButtonText={'Report Issue'}
          buttonStyle={{backgroundColor:'#0008', borderRadius:10,width:'90%'}}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"white"} size={18} />
            );
          }}
          dropdownIconPosition={"right"}
	data={countries}
	onSelect={(selectedItem, index) => {
		setmsg(!msg)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>

          </View>

          <View style={styles.navView}>

          <NativeBaseProvider>

<TabComponent />


</NativeBaseProvider>
   

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
   flex:1,
   
 },
 Bg:{
   height:deviceHeight,
   width:deviceWidth
 },
 headCnt:{
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
marginTop:20,
marginBottom:30

 },
 headTxt:{
   color:'white',
   fontSize:20
 
 },
 navView:{
   width:'90%',
   height:deviceHeight,
   justifyContent:'center',
   alignItems:'center',
   alignSelf:'center',
   flex:1
 },
 tabTxt:{
   //color:'white'
   backgroundColor:'white',
 },
 cardView:{
     marginTop:-11,
   backgroundColor:'white',
   justifyContent:'center', 
   height:'88%' ,
   width:'108%',
   alignSelf:'center'
   
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
     
       justifyContent:'center',  

       
     },
     notifyTxt:{
color:'gray',
backgroundColor:'white',
justifyContent:'center',  
borderRadius:10,
padding:20,
marginVertical:5,
     },
     notifyTxt2:{
        color:'white',
        backgroundColor:'#04cc6c',
        justifyContent:'center',  
        borderRadius:10,
        padding:20,
        marginVertical:5,
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
       alignItems:'center'

     },
     msgText:{
       fontSize:15,
       textDecorationStyle:'solid'
         },
         msgText2:{
           fontSize:12,
           color:'gray'
             },
             pickCont:{
                 justifyContent:'center',
                 alignSelf:'center',
             },
                head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
   head_text2:{
    color:'white',
    fontSize:20,
    fontWeight:'600',
    borderRadius:12,
    height:50,
    
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
  alignSelf:'center'
},
menuRow:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  flex:0.3,
},
cardViewMenu:{
  marginTop:-11,
backgroundColor:'white',
justifyContent:'center', 
height:'88%' ,
width:'105%',
alignSelf:'center'

},
gymHead:{
  color:'white',
  backgroundColor:'#ff9933',
  borderRadius:9,
  width:'90%',
  textAlign:'center',
  padding:7,
  alignSelf:'center',
  marginBottom:5

},
gymText:{
  textAlign:'center',
  marginBottom:5

},
gymInput:{
  borderRadius:9,
  width:'90%',
  //borderColor:'black',
  borderColor:'#ededed',
  borderWidth:2.1,
  borderRadius:18,
  alignSelf:'center',
  //width:'32%',
  height:40

},
gymCmnt:{
  borderRadius:9,
  width:'90%',
  //borderColor:'black',
  borderColor:'#ededed',
  borderWidth:2.1,
  borderRadius:18,
  alignSelf:'center',
  //width:'32%',
  height:100
},
gymBtn:{
  backgroundColor:'#ff9933',
  width:'50%',
  alignSelf:'center',
  padding:5,
  marginVertical:8,
  textAlign:'center'

},
gymBtnTxt:{
  color:'white',
  alignSelf:'center'

},
});

export default ServiceGym;

