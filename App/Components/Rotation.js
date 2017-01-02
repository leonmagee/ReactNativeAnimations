import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Animated,
    Easing,
    Text,
    TouchableWithoutFeedback,
    PanResponder,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    box: {
        backgroundColor: '#e96656',
        width: 180,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: {width: 1, height: 1},
    }
})


class Rotation extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 1500,
        }).start();
    }

    render() {
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            //outputRange: ['0deg', '360deg'],
            outputRange: ['0rad', '100rad'],
        })
        const animatedStyle = {
            transform: [
                {rotate: interpolateRotation}
            ]
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        )
    }
}

module.exports = Rotation;