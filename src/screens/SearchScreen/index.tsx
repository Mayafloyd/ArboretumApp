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
import { SearchBar } from "@rneui/themed";
import ProfileSquare, { ItemData } from "../../components/ProfileSquare";
import { Entypo } from "@expo/vector-icons";

const SearchScreen: React.FC<RootStackScreenProps<"SearchScreen">> = ({
  route,
  navigation,
}) => {
  const { type } = route.params;
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <ProfileSquare
        item={item}
        onPress={() => navigation.navigate("Profile", { userId: "Wssdds" })}
        backgroundColor={type === "favs" ? "#FF748D" : "#7EA75B"}
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
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <Text style={type === "favs" ? styles.textPink : styles.text}>
        {type === "favs"
          ? "Mis favoritos"
          : type === "species"
          ? "Buscar por especie"
          : "Especies en Volador"}
      </Text>
      {type === "favs" && <Entypo name="heart" size={24} color="#FF748D" />}
      {type !== "favs" && (
        <SearchBar
          placeholder="Ingresa el nombre de la especie"
          onChangeText={updateSearch}
          value={search}
          containerStyle={styles.containerSearchBar}
          lightTheme={true}
          inputStyle={styles.inputSearchBard}
          inputContainerStyle={styles.inputContainerStyle}
          round={true}
          // showLoading={true}
        />
      )}

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

export default SearchScreen;

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
