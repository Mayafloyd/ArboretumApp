import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};
export type ItemData = {
  id: string;
  title: string;
};
const ProfileSquare = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      <Image
        source={require("../../images/1310-flor.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSquare;

const styles = StyleSheet.create({
  item: {
    width: 170,
    height: 170,
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    // flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    // height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
    padding: 0,
    // height: "100%",
    width: "100%",
    // backgroundColor: "red",
  },
  title: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "75%",
    resizeMode: "cover",
    backgroundColor: "#D9D9D9",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
