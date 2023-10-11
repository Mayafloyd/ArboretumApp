import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  image?: string;
};
export type ItemData = {
  id: string;
  title: string;
  image?: string;
  imagen?: string;
  especie?: string[];
  nombre_comun?: string;
  habito?: string;
  coordenadas?: {
    [key: string]: [string, string];
  };

  id_campus_volador?: string;
  id_campus_minas?: string;
  id_campus_escuela?: string;
  id_campus_paysandu?: string;
  id_campus_pmineria?: string;
  id_campus_rio?: string;
  id_campus_sanpablo?: string;
};
const ProfileSquare = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  image,
}: ItemProps) => {
  // const handlePress = async () => {
  //   if (typeof onPress === "function") {
  //     const result: any = onPress();
  //     if (result instanceof Promise) {
  //       try {
  //         await result;
  //       } catch (error) {
  //         console.error("Error al manejar la promesa:", error);
  //       }
  //     }
  //   }
  // };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      <Image
        source={
          image
            ? {
                uri: image,
              }
            : require("../../images/1310-flor.jpg")
        }
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: textColor }]}>
          {item.title ? item.title : item?.especie[0]}
        </Text>
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
