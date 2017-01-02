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


class AnimateColors extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1500,
        }).start();
    }

    render() {
        const interpolateColor = this.animatedValue.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
        })
        const animatedStyle = {
            backgroundColor: interpolateColor,
            transform: [
                {translateY: this.animatedValue}
            ]
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        )
    }
}

module.exports = AnimateColors;