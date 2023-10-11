// src/screens/ProfileScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { RootStackScreenProps } from "../../navigation/Navigation";
import ProfileSquare, { ItemData } from "../../components/ProfileSquare";
import { colRefVolador } from "../../firebase/firebaseConfig";
import { getDocs } from "firebase/firestore";

const CampusScreen: React.FC<RootStackScreenProps<"CampusScreen">> = ({
  //   route,
  navigation,
}) => {
  const [selectedId, setSelectedId] = useState<string>();
  const [loading, setLoading] = useState(false);

  const goToTheCampus = (name: string) => {
    console.log("name", name);
    setLoading(true);
    getDocs(colRefVolador)
      .then((snapshot) => {
        let collection_ = [];
        snapshot.docs.forEach((doc) => {
          collection_.push({ ...doc.data(), id: doc.id });
        });
        console.log("colRefVolador", collection_);
        navigation.navigate("SearchScreen", {
          type: "Campus",
          title: name,
          info: collection_,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERR: colRefVolador", err.message);
        setLoading(false);
      });
  };

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <ProfileSquare
        item={item}
        onPress={() => goToTheCampus(item.title)}
        backgroundColor={"black"}
        textColor={"white"}
        image={item.image}
      />
    );
  };

  const DATA: ItemData[] = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Volador",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Escuela UN",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7f2a",
      title: "Minas",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d7f2",
      title: "Paysandu",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29df72",
      title: "PMinería",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72df",
      title: "Rio",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29d723",
      title: "San Pablo",
      image:
        "https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/162135535_10160837795882293_682736272396872411_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHAF0oXL4sIjJCiN55rEZp90n9A7AsxDWXSf0DsCzENZZGvIVf7UbqeH6PdcBoVPtwJ0s3bNt8e2zdfbFCBmJRi&_nc_ohc=n0V2QNXpzPUAX_Q6d9l&_nc_ht=scontent.feoh4-4.fna&oh=00_AfADf4_Q_TQSieieX2fIK895NVzwOGKm4TE9yUTPGLb8tQ&oe=65382825",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buscar por ubicación</Text>
      {loading ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" color="#7EA75B" />
        </View>
      ) : (
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
      )}
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
  activityContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
