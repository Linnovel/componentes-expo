import { View, Text, Switch, Pressable, Platform } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ text, onValueChange, value, className }: Props) => {
  //   const switchColor = useThemeColor({}, "primary");
  return (
    <Pressable
      className={`flex flex-row items-center justify-between active:opacity-80 mx-2 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        // thumbColor={isAndroid ? switchColor : ""
        trackColor={{
          false: "grey",
          //   true:
        }}
        // ios_backgroundColor={value ? "green" : "red"}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
