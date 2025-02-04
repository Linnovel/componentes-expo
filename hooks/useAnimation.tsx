import { useRef } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing: easing,
      // }).start(() => animatedTop.setValue(-100));
    }).start(callback);
  };

  const startMovingTop = ({
    initialPosition = -100,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: duration,
      duration: toValue,
      useNativeDriver: useNativeDriver,
      // easing: Easing.elastic(2),
      easing: easing,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,

    fadeIn,
    fadeOut,
    startMovingTop,
  };
};

export default useAnimation;
