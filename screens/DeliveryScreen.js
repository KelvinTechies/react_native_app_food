import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { feaured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { themeColor } from "../themes";
import { Feather } from "@expo/vector-icons";

export default function DeliveryScreen() {
  const restaurant = feaured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ flex: 1 }}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor="orange"
        />
      </MapView>
      <View
        style={{
          borderRadius: 30,
          marginTop: -12,
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 10,
            paddingTop: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, color: "#ccc", fontWeight: 700 }}>
              Estimated Arrival
            </Text>
            <Text style={{ fontSize: 18, color: "#ccc", fontWeight: 700 }}>
              20-30 mins
            </Text>
            <Text style={{ marginTop: 5, color: "#ccc" }}>
              Your Order its on its way
            </Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/images/4424677_2346486-removebg-preview.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: "orange",
            padding: 12,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 200,
            marginBottom: 10,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 15,
            gap: 10,
          }}
        >
          <View
            style={{
              padding: 1,
              borderRadius: 100,
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          >
            <Image
              source={require("../assets/images/WhatsApp_Image_2023-06-22_at_16.55.42-removebg-preview.png")}
              style={{ borderRadius: 200, width: 100, height: 100 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 800, fontSize: 20, color: "white" }}>
              CodeWithSas
            </Text>
            <Text style={{ fontWeight: 800, color: "white" }}>Your Rider</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: 3,
              gap: 8,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 300,
              }}
            >
              <Feather name="phone" size={40} color={"orange"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 300,
              }}
            >
              <Feather name="x" color={"red"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
