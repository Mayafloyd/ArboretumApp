import React from "react";
import { Pressable, Text, ViewStyle, TextStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonComponentProps {
  onPress: () => void;
  style?: ViewStyle;
  icon: "tree" | "heart-outline" | "map";
  iconSize: number;
  iconStyle?: ViewStyle;
  textStyle?: TextStyle;
  buttonText: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onPress,
  icon,
  iconSize,
  iconStyle,
  textStyle,
  buttonText,
}) => {
  return (
    <Pressable
      // style={[styles.button, style,]}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#1E1E1EDB" : "#1E1E1E",
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={icon}
        size={iconSize}
        color="#7EA75B"
        style={[styles.icon, iconStyle]}
      />
      <Text style={[styles.text, textStyle]}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = {
  button: {
    // backgroundColor: "#1E1E1E",
    // paddingVertical: 12,
    paddingHorizontal: 22,
    width: "100%",
    height: 60,
    borderRadius: 10,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  } as ViewStyle,
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#DEDEDE",
    paddingLeft: 10,
  } as TextStyle,
  icon: {
    backgroundColor: "transparent",
  } as ViewStyle, // Estilo base del ícono
};

export default ButtonComponent;
