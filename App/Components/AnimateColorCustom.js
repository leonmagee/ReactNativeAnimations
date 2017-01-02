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


class AnimateColorCustom extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 750,
            duration: 6000,
        }).start();
    }

    render() {
        const interpolateColor = this.animatedValue.interpolate({
            inputRange: [0, 150, 300, 450, 600, 750],
            outputRange: ['#FFF', '#089CCA', '#07CA88', '#10CAC0', '#5CCA9D', '#089CCA'],
            // white / blue / green / aqua / light green
        })
        const animatedStyle = {
            backgroundColor: interpolateColor,
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        )
    }
}

module.exports = AnimateColorCustom;