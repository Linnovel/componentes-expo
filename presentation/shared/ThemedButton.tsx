import { Pressable, PressableProps, Text } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
  className?: string;
}

const ThemedButton = ({ children, className, ...rest }: Props) => {
  return (
    <Pressable
      className={`bg-purple-600 dark:bg-dark-primary items-center rounded-xl px-6 py-4 active:opacity-80 ${className}`}
      {...rest}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
