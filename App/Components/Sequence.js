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
        width: 80,
        height: 80,
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


class Sequence extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
    }

    componentDidMount() {
        /**
         * sequence allows you to chain multiple animations
         */
        Animated.sequence([
            Animated.timing(this.animatedValue1, {
                toValue: 150,
                duration: 1000,
            }),
            Animated.spring(this.animatedValue2, {
                toValue: 3,
            }),
            Animated.timing(this.animatedValue1, {
                toValue: 0,
                duration: 1000,
            }),
            Animated.spring( this.animatedValue2, {
                toValue: .5,
            })
        ]).start();
    }

    render() {
        const animatedStyle = {
            transform: [
                {translateY: this.animatedValue1},
                {scale: this.animatedValue2},
            ]
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </View>
        )
    }
}

module.exports = Sequence;