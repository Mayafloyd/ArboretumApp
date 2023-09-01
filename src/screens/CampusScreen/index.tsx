// src/screens/ProfileScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { RootStackScreenProps } from "../../navigation/Navigation";
import ProfileSquare, { ItemData } from "../../components/ProfileSquare";

const CampusScreen: React.FC<RootStackScreenProps<"CampusScreen">> = ({
  //   route,
  navigation,
}) => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <ProfileSquare
        item={item}
        onPress={() => navigation.navigate("SearchScreen", { type: "Campus" })}
        backgroundColor={"black"}
        textColor={"white"}
      />
    );
  };

  const DATA: ItemData[] = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7f2a",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7f2",
      title: "Third Item",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29df72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72df",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d723",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72d",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72w",
      title: "Third Item",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buscar por ubicación</Text>

      <SafeAreaView style={styles.containerFlatList}>
        <FlatList
          key={"#"}
          keyExtractor={(item) => "#" + item.id}
          numColumns={2}
          data={DATA}
          renderItem={renderItem}
          // keyExtractor={(item) => item.id}
          extraData={selectedId}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default CampusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  containerSearchBar: {
    // flex: 1,
    backgroundColor: "transparent",
    width: "100%",
    borderColor: "transparent",
    borderWidth: 0,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputSearchBard: {
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 0,
  },
  text: {
    width: "100%",
    justifyContent: "flex-start",
    fontFamily: "BlackHanSans-Regular",
    fontSize: 32,
    color: "#7EA75B",
    marginVertical: 10,
    textAlign: "center",
  },
  textPink: {
    width: "100%",
    justifyContent: "flex-start",
    fontFamily: "BlackHanSans-Regular",
    fontSize: 32,
    color: "#FF748D",
    marginVertical: 10,
    textAlign: "center",
  },
  containerFlatList: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: "pink",
    width: "100%",
    paddingHorizontal: 10,
  },
});
