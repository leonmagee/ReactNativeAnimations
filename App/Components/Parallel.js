import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Animated,
    Text,
    Dimensions,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#3078CA',
        marginHorizontal: 5,
        width: 50,
        height: 50,
    },
})

/**
 * Destructuring Example
 */

class Parallel extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(1);
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.animatedValue1, {
                toValue: 200,
                duration: 500,
            }),
            Animated.timing(this.animatedValue2, {
                toValue: 3,
            })
        ]).start();
    }

    render() {
        const animatedStyles = {
            transform: [
                { translateY: this.animatedValue1},
                { scale: this.animatedValue2}
            ]
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyles]}/>
            </View>
        )
    }
}

module.exports = Parallel;