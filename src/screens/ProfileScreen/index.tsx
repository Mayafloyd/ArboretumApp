import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  // PermissionsAndroid,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RootStackScreenProps } from "../../navigation/Navigation";
import { ListItem } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen: React.FC<RootStackScreenProps<"Profile">> = ({
  route,
}) => {
  const { item } = route.params;
  console.log("ITEM PROFILE", item, !item.especie);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headView}>
          <Text style={styles.text}>{item?.especie[0]}</Text>
          <Image
            source={
              item?.imagen
                ? {
                    uri: item?.imagen,
                  }
                : require("../../images/1310-flor.jpg")
            }
            style={styles.image}
          />
          <View></View>
          <FontAwesome name="eye" size={30} color="black" />
          <FontAwesome name="heart-o" size={30} color="black" />
          {/* <FontAwesome name="heart" size={30} color="black" /> */}
        </View>
        <View style={styles.blackView}>
          <Text style={styles.name}>{item?.especie[0] ?? ""}</Text>
          <ListItem containerStyle={styles.info}>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                Nombre común
              </ListItem.Subtitle>
              <ListItem.Title style={styles.title}>
                {item?.nombre_comun ?? ""}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem containerStyle={styles.info}>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                Especie
              </ListItem.Subtitle>
              <ListItem.Title style={styles.title}>
                {item?.especie[0] ?? ""},{item?.especie[1] ?? ""}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem containerStyle={styles.info}>
            <ListItem.Content>
              <ListItem.Subtitle style={styles.subtitle}>
                Habito
              </ListItem.Subtitle>
              <ListItem.Title style={styles.title}>
                {item?.habito ?? ""}
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

          <View
            style={{ flex: 1, width: "100%", height: 400, borderRadius: 20 }}
          >
            {/* <MapView
              style={styles.map}
              initialRegion={{
                latitude: 6.26095398148613,
                longitude: -75.57743221023576,
                latitudeDelta: 0.0072,
                longitudeDelta: 0.0121,
              }}
              showsUserLocation={true}
              // showsMyLocationButton={true}
              followsUserLocation={true}
              // onMapReady={() => {
              //   PermissionsAndroid.request(
              //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              //   ).then((granted) => {
              //     alert(granted); // just to ensure that permissions were granted
              //   });
              // }}
            >
              {item?.coordenadas &&
                Object.entries(item?.coordenadas).map(
                  ([key, [latitude, longitude]]) => (
                    <Marker
                      key={key}
                      coordinate={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude),
                      }}
                      title={`${item?.especie[0] ?? ""} ${key}`}
                      description={`Coordinates: ${latitude}, ${longitude}`}
                    >
                      <MaterialCommunityIcons
                        name="tree"
                        size={24}
                        color="#7EA75B"
                      />
                    </Marker>
                  )
                )}

              <Marker
                coordinate={{ latitude: 6.2613, longitude: -75.5772 }}
                title={"title"}
                description={"description"}
              />
            </MapView> */}
          </View>
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
