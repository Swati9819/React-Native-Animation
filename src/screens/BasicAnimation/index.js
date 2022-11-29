import React, {useState} from 'react';
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

export default function BasicAnimation() {
  const leftValue = useState(new Animated.Value(0))[0];
  const springValue = useState(new Animated.Value(0))[0];
  const opacityValue = useState(new Animated.Value(0))[0];
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  const onExample1Press = () => {
    Animated.timing(value, {
      toValue: {x: 200, y: 200},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const onExample2Press = () => {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  /**
   * Animated.spring work as same as Animated.timing but with some bouncing affect
   * Animated.spring use duration on its own but it is good if we have control over duration
   */

  const onExample3Press = () => {
    Animated.spring(springValue, {
      toValue: 200,
      // duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  /**
   * useNativeDriver : true - when animation is handled by main thread / native OS
   * useNativeDriver : false - when animation is handled by JS thread (as we can see in example 1,2,3)
   */

  const onExample4Press = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const example1 = () => {
    return (
      <>
        <Text style={styles.subHeading}>Example1</Text>
        <Animated.View style={value.getLayout()}>
          <View style={styles.animatedView} />
        </Animated.View>
        <TouchableOpacity
          onPress={onExample1Press}
          style={styles.onButtonClick}>
          <Text style={styles.onClickText}>On Click</Text>
        </TouchableOpacity>
      </>
    );
  };

  const example2 = () => {
    return (
      <>
        <Text style={styles.subHeading}>Example2</Text>
        <Animated.View style={styles.animatedStyle(leftValue)} />
        <TouchableOpacity
          onPress={onExample2Press}
          style={styles.onButtonClick}>
          <Text style={styles.onClickText}>On Click</Text>
        </TouchableOpacity>
      </>
    );
  };

  const example3 = () => {
    return (
      <>
        <Text style={styles.subHeading}>Example3 with Animated.spring()</Text>
        <Animated.View style={styles.animatedStyle(springValue)} />
        <TouchableOpacity
          onPress={onExample3Press}
          style={styles.onButtonClick}>
          <Text style={styles.onClickText}>On Click</Text>
        </TouchableOpacity>
      </>
    );
  };

  const example4 = () => {
    return (
      <>
        <Text style={styles.subHeading}>
          Example3 with useNativeDriver : true
        </Text>
        <Animated.View style={styles.animationWithOpacity(opacityValue)} />
        <TouchableOpacity
          onPress={onExample4Press}
          style={styles.onButtonClick}>
          <Text style={styles.onClickText}>On Click</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.heading}>BasicAnimation</Text>
      <ScrollView>
        {example1()}
        {example2()}
        {example3()}
        {example4()}
      </ScrollView>
    </SafeAreaView>
  );
}

// In animation we nned a 'value' - 0, 1, 2, 3, 4, 5, 6.....and so on
// this value transform into other value such as (0,0) -> (100,50)
// and this interpolate all the stuff from (0 0) -> (10, 5) -> (100, 50)
