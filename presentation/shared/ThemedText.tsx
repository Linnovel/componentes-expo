import { Text, TextProps } from "react-native";
import React from "react";

type TextStyle = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  children: string;
  className?: string;
  type?: TextStyle;
  text?: string;
}

const ThemedText = ({
  children,
  className = "",
  type = "normal",
  ...rest
}: Props) => {
  // Map the `type` prop to Tailwind classes
  const typeClasses: Record<TextStyle, string> = {
    normal: "font-normal",
    h1: "text-3xl font-bold",
    h2: "text-2xl font-bold",
    "semi-bold": "font-semibold",
    link: "font-normal underline text-blue-500", // Add link-specific styles
  };

  return (
    <Text
      className={`text-light-text dark:text-dark-text ${typeClasses[type]} ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
