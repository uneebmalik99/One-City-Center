import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';
//import {deviceHeight, deviceWidth} from '../../constance/AppConstance';
import bg2 from "../../../assets/images/splash2.png"
//import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown'




const RegisterTwoT =  ({navigation}) => {
    const countries = ["One City Center1", "Mobile Access"]

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)

    const [selectedValue, setSelectedValue] = useState("One City Center1");
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'One City Center1', value: 'One City Center1'},
    {label: 'Banana', value: 'One City Center2'}
  ]);
  



  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={bg2} resizeMode="cover" style={styles.image}>
<View style={styles.regView}>
    <Text  style={styles.regText}>Registration</Text>
  </View>
  <View style={styles.regBtnVw}>

  <Text style={styles.regBtnTxt}>Mobile Number</Text>   
   <TextInput
   placeholder='TH +66'
   placeholderTextColor='white'
   style={styles.regBtn}></TextInput>


  <Text style={styles.regBtnTxt}>Building</Text>   
  {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onPress={() => pickerOpen()}
    /> */}
  <SelectDropdown
	data={countries}
  buttonStyle={{backgroundColor:'#0001',borderWidth:1,borderColor:'#7f7f7f'  ,borderRadius:10,width:'100%'}}
  buttonTextStyle={styles.head_text}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
   defaultValueByIndex={0} 
   renderDropdownIcon={() => {
    return (
      <FontAwesome name="chevron-down" color={"white"} size={18} />
    );
  }}
  dropdownIconPosition={"right"}
   // use default value by index or default value
	buttonTextAfterSelection={(selectedItem, index) => {
    console.log(selectedItem +'---'+ index);
    
    
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

<View style={styles.chkCont}>
<CheckBox
style={styles.chkBx}

    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />

<Text style={styles.chkTxt}>I agree to the terms and conditions</Text>

</View>

<View style={styles.chkCont}>
<CheckBox
style={styles.chkBx}

    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />

<Text style={styles.chkTxt}>I agree to the terms and conditions</Text>

</View>


<Text style={styles.mandText}>*Terms are mandatory for registration </Text>


<View style={styles.regBtnNxtCont}>
   <TouchableOpacity
   onPress={()=> {navigation.navigate('RegisterActivation')}}
   style={styles.regBtnNxt}>
        <Text style={styles.regBtnTxt}>Submit</Text>
    </TouchableOpacity>
    </View>

  </View>
</ImageBackground>
  
</SafeAreaView>
    
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
    justifyContent: "center"
  },
  regView:{
    marginTop:150,
    alignSelf:'center',
    alignContent:'center'

  },
  regText:{
    fontSize:30,
    color:'white',

  },
  regBtnVw:{
    paddingTop:5,
    marginHorizontal:30,

  },
  regBtnTxt:{
    fontSize:20,
    color:'white',
    fontWeight:'600',
    textAlign:'center'

  },
  regBtn:{
    borderColor:'#7f7f7f',
    borderWidth:1,
    borderRadius:7,
    height:50,
    padding:10,
    marginTop:5,
    fontSize:18,
    color:'white',
    marginBottom:10,
  },
  regBtnNxtCont:{
    
      marginTop:50,
marginHorizontal:85,
  },
  head_text:{
    color:'white',
    fontSize:20,
    fontWeight:'600'
   },
regBtnNxt:{
    backgroundColor:'grey',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:9,
    height:40,
    justifyContent:'center',
    marginBottom:10,
  },
pick:{
color:'white',
borderColor:'white',
borderRadius:9,
borderWidth:1,

},
chkCont:{
    alignItems:'flex-start',
flexDirection:'row',
marginTop:15

    
    },
chkBx:{

color:'white'
    
},
chkTxt:{
alignSelf:'center',
color:'white',
textDecorationLine: 'underline' 
        
    },
mandText:{
    marginTop:20,
marginLeft:28,
color:'white',
textDecorationLine: 'underline' 
                
},

}
);

export default RegisterTwoT;
