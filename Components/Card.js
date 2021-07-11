import React from 'react';
import { View, Text, Style } from 'react-native';

const Card = (props) => {
    return (
        // parent component to hold other in place
        <View style={styles.parent}>
            {/* header component */}
            <View style={styles.headchild}>
                <Text style={styles.text}>Feedback / Survey</Text>
            </View>
            {/* body component */}
            <View style={styles.bodychild}>
                <Text style={styles.bodytext}>Thank you for your Valueable Feedback.{'\n'}
                your Opinions and comments are very
                important to us. We really appreciate
                the time you tookto help us improve
                in order to serve you better </Text>
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
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        backgroundColor: "white",
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
        fontSize: 15,
        textAlign: "center",
        lineHeight: 20,
        marginLeft: 15,
        marginRight: 15,
      }
}

export default Card;