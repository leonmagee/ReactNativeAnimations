import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        //justifyContent: 'center',
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#e96656',
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: {width: 1, height: 1},
    }
})


class FlexTest extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={styles.text}>SEE LISTINGS</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.text}>SEE LISTINGS</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.text}>SEE LISTINGS</Text>
                </View>
            </View>
        )
    }
}

module.exports = FlexTest;
