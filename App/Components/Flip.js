import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Animated,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flipCard: {
        backgroundColor: '#3078CA',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'hidden', // just for animation
    },
    flipCardBack: {
        backgroundColor: "red",
        position: "absolute",
        top: 0,
    },
    flipText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

/**
 * Destructuring Example
 */

class Flip extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value;
        })

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0,180],
            outputRange: ['0deg', '180deg'],
        })

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0,180],
            outputRange: ['180deg', '360deg'],
        })
    }

    componentDidMount() {
        // Animated.parallel([
        //     Animated.timing(this.animatedValue1, {
        //         toValue: 200,
        //         duration: 500,
        //     }),
        //     Animated.timing(this.animatedValue2, {
        //         toValue: 3,
        //     })
        // ]).start();
    }

    flipCard() {
        if ( this.value >= 90 ) {
            Animated.spring( this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10,
            }).start();
        } else {
            Animated.timing( this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10,
            }).start();
        }

    }

    render() {
        const frontAnimatedStyle = {
            transform: [
                {rotateX: this.frontInterpolate}
            ]
        }

        const backAnimatedStyle = {
            transform: [
                {rotateY: this.backInterpolate}
            ]
        }

        return (
            <View style={styles.container}>
               <View>
                  <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                      <Text style={styles.flipText}>
                          This text is flipping on the front.
                      </Text>
                  </Animated.View>
                   <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
                       <Text style={styles.flipText}>
                           This text is flipping on the back.
                       </Text>
                   </Animated.View>
                   <TouchableOpacity onPress={() => this.flipCard()}>
                       <Text>Flip!</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}

module.exports = Flip;