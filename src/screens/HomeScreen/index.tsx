import React, { useCallback, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { RootStackScreenProps } from "../../navigation/Navigation";
import ButtonComponent from "../../components/ButtonComponent";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colRefTodas } from "../../firebase/firebaseConfig";
import { getDocs } from "firebase/firestore";

SplashScreen.preventAutoHideAsync();

const HomeScreen: React.FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const goToTheSpecies = () => {
    setLoading(true);
    if (colRefTodas) {
      getDocs(colRefTodas)
        .then((snapshot) => {
          let collection_ = [];
          snapshot.docs.forEach((doc) => {
            collection_.push({ ...doc.data(), id: doc.id });
          });
          console.log("colRefTodas", collection_);
          navigation.navigate("SearchScreen", {
            type: "species",
            info: collection_,
          });

          setLoading(false);
        })
        .catch((err) => {
          console.log("ERR: colRefTodas", err.message);
          setLoading(false);
        });
    }
  };

  const [fontsLoaded] = useFonts({
    "BlackHanSans-Regular": require("../../fonts/BlackHanSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require("../../images/1310-flor.jpg")}
          style={styles.image}
        />

        <View style={styles.childContainer}>
          <Text style={styles.text}>Arboretum y Palmetum</Text>
          <Text style={styles.description}>
            Explora la diversidad de árboles en los campus de la Universidad
            Nacional de Colombia. Encuentra información detallada sobre
            especies, descubre su ubicación en el mapa y conecta con la
            naturaleza a través de la Arboretum y Palmetum App Móvil.
          </Text>
        </View>
        <View style={styles.childContainer}>
          <ButtonComponent
            onPress={() => goToTheSpecies()}
            icon="tree"
            iconSize={48}
            buttonText="Buscar por especie"
          />

          <ButtonComponent
            onPress={() => navigation.navigate("CampusScreen")}
            icon="map"
            iconSize={40}
            iconStyle={{ padding: 5 }}
            buttonText="Buscar por ubicación"
          />
          {/* <ButtonComponent
            onPress={() =>
              navigation.navigate("SearchScreen", { type: "favs" })
            }
            icon="heart-outline"
            iconSize={37}
            iconStyle={{ padding: 7 }}
            buttonText="Mirar favoritos"
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  childContainer: {
    // backgroundColor: "#EDA6FF",
    width: "100%",
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "#D9D9D9",
  },
  text: {
    width: "100%",
    justifyContent: "flex-start",
    fontFamily: "BlackHanSans-Regular",
    fontSize: 32,
    color: "#7EA75B",
    marginVertical: 10,
  },
  text1: {
    width: "100%",
    justifyContent: "center",
    fontFamily: "BlackHanSans-Regular",
    fontSize: 32,
    color: "#7EA75B",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    fontWeight: "500",
  },
  imageContainer: {
    flex: 1,
  },

  containerFather: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: "pink",
    paddingHorizontal: 40,
    width: "100%",
    height: "100%",
  },
});
