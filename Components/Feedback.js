import { useState } from "react";
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FirstFeedback = () => {
    const [selectedValue, setSelectedValue] = useState(" ");
    return (
        // parent component that holds all other
        <View style={styles.parent}>

            {/* head component start */}
            <View style={styles.headchild}>

                {/* title */}
                <Text style={styles.heading}>Feedback / Survey</Text>

                {/* head end here */}
            </View>

            {/* body container starts here */}
            <View style={styles.bodychild}>

                {/* some text here */}
                <Text style={styles.bodytext}>
                    Your Feedback will help us decide
                    what improvements should be made to our platform to provide the
                    best user experience.{'\n \n'}Please take a minute to comment
                    on your experience with us to date
                </Text>

                {/* subHeading */}
                <Text style={styles.subHeading}>Topic</Text>

                {/* container for picker/dropdown starts*/}
                <View style={styles.pickerContainer}>

                    {/* dropdown */}
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >

                        {/* items inside dropdown */}
                        <Picker.Item label="Select Option" value=" " />
                        <Picker.Item label="Problem" value="problem" />
                        <Picker.Item label="Suggestion" value="suggestion" />

                        {/* dropdown ends here */}
                    </Picker>

                    {/* picker container ends here */}
                </View>

                {/* subHeading */}
                <Text style={styles.subHeading}>Feedback</Text>

                {/* User Feedback Container starts */}
                <View style={styles.feedbackContainer}>

                    {/* <Text style={{ margin: 10 }}>Write here</Text> */}
                    <TextInput
                        placeholder="Write your Feedback here"
                        style={{ margin: 10 }}
                    ></TextInput>

                    {/* feedback container ends here */}
                </View>

                {/* Button Container */}
                <View style={{ margin: 10 }}>

                    {/* TouchableOpacity / Button */}
                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={() => console.log("button Pressed")}
                    >

                        <Text style={{ color: 'white' }}>Submit</Text>

                    </TouchableOpacity>

                {/* button container ends here */}
                </View>


                {/* body container ends here */}
            </View>

            {/* parent container ended */}
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        marginTop: 55,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
    },
    headchild: {
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 5,
        paddingTop: 2,
        margin: 0
    },
    heading: {
        color: "white",
        fontSize: 20,
        lineHeight: 30,
        alignItems: "center",
        margin: 5
    },
    bodychild: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        marginTop: 0,
        backgroundColor: "white",
    },
    bodytext: {
        color: "black",
        fontSize: 17,
        textAlign: "left",
        lineHeight: 20,
        margin: 20,
        marginTop: 35,
    },
    subHeading: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    },
    pickerContainer: {
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        width: 275,
        justifyContent: 'center',
    },
    picker: {
        height: 35,
        width: 275,
    },
    feedbackContainer: {
        borderRadius: 20,
        borderWidth: 1,
        height: 250,
        width: 275,
    },
    TouchableOpacity: {
        borderRadius: 5,
        borderWidth: 1,
        height: 35,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eda62b',
    }
});

export default FirstFeedback;