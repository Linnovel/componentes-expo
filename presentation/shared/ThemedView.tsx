import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  classname?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  classname,
  margin = false,
  children,
  safe = false,
  bgColor,
}: Props) => {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");

  const safeArea = useSafeAreaInsets();

  return (
    // className="bg-light-background dark:bg-dark-background"
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={classname}
    >
      {children}
    </View>
  );
};

export default ThemedView;
