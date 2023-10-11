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
import { getDocRef } from "../../firebase/firebaseConfig";
import { getDoc } from "firebase/firestore";
import { Button } from "@rneui/base";

const SearchScreen: React.FC<RootStackScreenProps<"SearchScreen">> = ({
  route,
  navigation,
}) => {
  const { type, title, info } = route.params;
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string>();
  const [searchResults, setSearchResults] = useState<ItemData[]>(info);
  console.log("search", search);

  const handleBuscar = () => {
    const FilteredTrees = info?.filter((tree) => {
      if (
        tree?.title
          ? tree?.title.toUpperCase().includes(search.toUpperCase())
          : tree?.especie[0].toUpperCase().includes(search.toUpperCase())
      ) {
        return true;
      }

      return false;
    });
    console.log("FilteredTrees", FilteredTrees);
    setSearchResults(FilteredTrees);
  };

  const getItemFromDb = async (item) => {
    let campus: string;
    let id: string;
    if (item.id_campus_volador) {
      campus = "CAMPUS-VOLADOR";
      id = item.id_campus_volador;
    } else if (item.id_campus_minas) {
      campus = "CAMPUS-MINAS";
      id = item.id_campus_minas;
    } else if (item.id_campus_escuela) {
      campus = "CAMPUS-ESCUELAUN";
      id = item.id_campus_escuela;
    } else if (item.id_campus_rio) {
      campus = "CAMPUS-RIO";
      id = item.id_campus_rio;
    } else if (item.id_campus_paysandu) {
      campus = "CAMPUS-PAYSANDU";
      id = item.id_campus_paysandu;
    } else if (item.id_campus_pmineria) {
      campus = "CAMPUS-PMINERIA";
      id = item.id_campus_pmineria;
    } else if (item.id_campus_sanpablo) {
      campus = "CAMPUS-SANPABLO";
      id = item.id_campus_sanpablo;
    }
    console.log("getDocRef(campus, id)", getDocRef(campus, id));
    // getDoc(getDocRef(campus, id))
    //   .then((snapshot) => {
    //     if (snapshot) {
    //       const snapshotData = snapshot.data() as ItemData;

    //       item = snapshotData;
    //       console.log("snapshotData", snapshotData);

    //     } else {
    //       console.log("Snapshot is undefined");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("ERR: colRefTodas", err.message);
    //   });
    //   return item;
    try {
      const snapshot = await getDoc(getDocRef(campus, id));
      if (snapshot.exists()) {
        const snapshotData = snapshot.data() as ItemData;
        console.log("snapshotData", snapshotData);
        return snapshotData;
      } else {
        console.log("Documento no encontrado en Firestore");
        return null; // Otra opción, dependiendo de tus necesidades
      }
    } catch (err) {
      console.error("Error al obtener el documento de Firestore:", err);
      throw err; // Puedes lanzar una excepción si lo deseas
    }
  };

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <ProfileSquare
        item={item}
        onPress={async () => {
          console.log("if item", item, !item?.habito);
          if (!item?.habito) {
            item = await getItemFromDb(item);
          }
          return navigation.navigate("Profile", { userId: "Wssdds", item });
        }}
        backgroundColor={type === "favs" ? "#FF748D" : "#7EA75B"}
        textColor={"white"}
        image={item?.imagen}
      />
    );
  };

  // const DATA: ItemData[] = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d7f2a",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d7f2",
  //     title: "Third Item",
  //   },

  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29df72",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72df",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d723",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72d",
  //     title: "Third Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72w",
  //     title: "Third Item",
  //   },
  // ];
  const updateSearch = (search) => {
    if (!search) {
      setSearchResults(info);
    }
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <Text style={type === "favs" ? styles.textPink : styles.text}>
        {type === "favs"
          ? "Mis favoritos"
          : type === "species"
          ? "Buscar por especie"
          : `Especies en ${title}`}
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
          onClear={() => {
            setSearchResults(info); // Limpiar los resultados cuando se borra la búsqueda
          }}
        />
      )}
      {search && (
        <Button
          onPress={handleBuscar}
          title="Buscar"
          color="#7EA75B"
          accessibilityLabel="Learn more about this purple button"
        />
      )}

      <SafeAreaView style={styles.containerFlatList}>
        <FlatList
          key={"#"}
          keyExtractor={(item) => "#" + item.id}
          numColumns={2}
          data={searchResults}
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
