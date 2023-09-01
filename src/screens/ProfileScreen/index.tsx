import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RootStackScreenProps } from "../../navigation/Navigation";
import { ListItem } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";

const ProfileScreen: React.FC<RootStackScreenProps<"Profile">> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headView}>
          <Text style={styles.text}>Profile Screen Syzygium Malaccense</Text>
          <Image
            source={require("../../images/1310-flor.jpg")}
            style={styles.image}
          />
          <FontAwesome name="eye" size={30} color="black" />
          <FontAwesome name="heart-o" size={30} color="black" />
          {/* <FontAwesome name="heart" size={30} color="black" /> */}
        </View>
        <View style={styles.blackView}>
          <Text style={styles.name}>Syzygium Malaccense</Text>
          <ListItem containerStyle={styles.info}>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                Nombre común
              </ListItem.Subtitle>
              <ListItem.Title style={styles.title}>
                Magnoliophyta
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem containerStyle={styles.info}>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                Especie
              </ListItem.Subtitle>
              <ListItem.Title style={styles.title}>
                Magnoliopsida
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem containerStyle={styles.info}>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                Sedes
              </ListItem.Subtitle>
              <ListItem.Title style={styles.title}>Rio,Volador</ListItem.Title>
            </ListItem.Content>
          </ListItem>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title={"title"}
              description={"description"}
            />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  blackView: {
    backgroundColor: "black",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "100%",
    padding: 30,
    alignItems: "center",
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
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "#D9D9D9",
  },
  headView: {
    paddingHorizontal: 40,
  },
  map: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  info: {
    backgroundColor: "#1E1E1E",
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    color: "#ffff",
  },
  subtitle: {
    color: "#7EA75B",
    fontWeight: "bold",
  },
  title: {
    color: "#ffff",
    fontSize: 21,
  },
  name: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
