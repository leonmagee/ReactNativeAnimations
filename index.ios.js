import React, {Component} from 'react';
// Egghead Tutorials
import ButtonSpring from './App/Components/ButtonSpring';
import Draggable from './App/Components/Draggable';
import AnimateColors from './App/Components/AnimateColors';
import Rotation from './App/Components/Rotation';
import Sequence from './App/Components/Sequence';
import StaggerEgg from './App/Components/StaggerEgg';
import Parallel from './App/Components/Parallel';
import Flip from './App/Components/Flip';

// CaptainRedBeard demos
// https://github.com/CapitanRedBeard/react-native-animation-showcase/blob/master/js/components/Stagger.js
import Stagger from './App/Components/Stagger';

// Custom
import StaggerCustom from './App/Components/StaggerCustom';
import AnimateColorCustom from './App/Components/AnimateColorCustom';
import FlexTest from './App/Components/FlexTest';

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    /**
     * This is the container of everything, not just the nav
     */
    container: {
        flex: 1,
        //backgroundColor: '#111111'
    }
});

class AnimationTester extends Component {

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: StaggerCustom,
                    title: 'Animation',
                }}
                navigationBarHidden={true}
            />
        )
    }
}
AppRegistry.registerComponent('AnimationTester', () => AnimationTester);
