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
        flexDirection: "row",
    },
    box: {
        backgroundColor: '#3078CA',
        flex: 1,
        marginHorizontal: 5,
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: {width: 1, height: 1},
    }
})

/**
 * Destructuring Example
 */
const {height} = Dimensions.get("window");

class StaggerEgg extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);

    }

    componentDidMount() {
        Animated.stagger(400, [
            Animated.timing(this.animatedValue1, {
                toValue: height, duration: 1500
            }),
            Animated.timing(this.animatedValue2, {
                toValue: height, duration: 3000
            }),
            Animated.timing(this.animatedValue3, {
                toValue: 300, duration: 500
            }),
        ]).start();
    }

    render() {
        const animatedStyle1 = {
            height: this.animatedValue1
        }
        const animatedStyle2 = {
            height: this.animatedValue2
        }
        const animatedStyle3 = {
            height: this.animatedValue3
        }

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle1]}/>
                <Animated.View style={[styles.box, animatedStyle2]}/>
                <Animated.View style={[styles.box, animatedStyle3]}/>
            </View>
        )
    }
}

module.exports = StaggerEgg;