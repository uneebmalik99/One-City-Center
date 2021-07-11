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




const RegisterThree =  () => {


  const [toggleCheckBox, setToggleCheckBox] = useState(false)


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
    <Picker

     style={styles.pick}
  selectedValue={selectedValue}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedValue(itemValue)
  }>
  <Picker.Item label="One City Center1" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>


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


<Text style={styles.mandText}>*I agree to the terms and conditions</Text>


<View style={styles.regBtnNxtCont}>
   <TouchableOpacity style={styles.regBtnNxt}>
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
    marginLeft:8,
    textAlign:'center'

  },
  regBtn:{
    borderColor:'white',
    borderWidth:1,
    borderRadius:7,
    height:50,
    marginBottom:10,
  },
  regBtnNxtCont:{
      marginTop:50,
marginHorizontal:85,
  },
regBtnNxt:{
    backgroundColor:'grey',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:9,
    height:35,
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
  marginTop:10
  
      
      },
  chkBx:{
  
  color:'white'
      
  },
  chkTxt:{
  
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

export default RegisterThree;