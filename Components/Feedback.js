import React from 'react';
import { View, Text, Style, Pic } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import RNPickerSelect from 'react-native-picker-select';

const Feedback = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.headchild}>
                <Text style={styles.text}>Feedback / Survey</Text>
            </View>
            <View style={styles.bodychild}>
                <Text style={styles.bodytext}>
                    Your Feedback will help us decide
                    what improvements should be made to our platform to provide the
                    best user experience.{'\n \n'}Please take a minute to comment
                    on your experience with us to date
                </Text>
                <View style={styles.bodychild}>
                <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
                </View>
            </View>
        </View>
    );
};

const styles = {
    parent: {
        flex: 1,
        marginTop: 55,
        marginBottom: 25,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        borderwidth: 10,
        borderRadius: 1,
    },
    headchild: {
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 5,
        paddingTop: 2,
        paddingBotom: 2,
    },
    bodychild: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        backgroundColor: "white",
    },
    fback: {
        flex: 0.5,
        marginTop: 10,
        borderColor: '#7a42f4',
        borderwidth: 1,
        borderRadius: 1
    },
    text: {
        color: "white",
        fontSize: 20,
        lineHeight: 30,
        alignItems: "center",
        marginBottom: 5,
        marginTop: 1
    },
    bodytext: {
        color: "black",
        fontSize: 17,
        textAlign: "left",
        lineHeight: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 15,
    }

}

export default Feedback;