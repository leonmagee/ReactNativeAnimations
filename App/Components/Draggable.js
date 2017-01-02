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


class Draggable extends Component {

    // constructor(props) {
    //     super(props);
    //
    //
    // }

    componentWillMount() {
        this.animatedValue = new Animated.ValueXY();
        this._value = {x: 0, y: 0}
        this.animatedValue.addListener((value) => this._value = value)
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, GestureState) => {
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y,
                })
                this.animatedValue.setValue({x: 0, y: 0})
            },
            // onPanResponderMove: (e, gestureState) => {
            //
            // },
            onPanResponderMove: Animated.event([
                null, {dx: this.animatedValue.x, dy: this.animatedValue.y}
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue.flattenOffset();
                Animated.decay(this.animatedValue, {
                    deceleration: 0.997,
                    velocity: { x: gestureState.vx, y: gestureState.vy}
                }).start();
            },
        })
    }


    render() {
        const animatedStyle = {
            transform: this.animatedValue.getTranslateTransform()
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.button, animatedStyle]} { ... this.panResponder.panHandlers}>
                    <Text style={styles.text}>Drag Me</Text>
                </Animated.View>
            </View>
        )
    }
}

module.exports = Draggable;