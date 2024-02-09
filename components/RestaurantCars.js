import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { themeColor } from "../themes";
import { useNavigation } from "@react-navigation/native";

const RestaurantCars = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View style={{ shadowColor: themeColor.bgColor(0.2), shadowRadius: 7 }}>
        <View
          style={{
            marginRight: 12,
            backgroundColor: "white",
            borderRadius: 30,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: 200,
              width: 300,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          />
          <View style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 4 }}>
            <Text style={{ fontSize: 20, paddingTop: 2, fontWeight: 700 }}>
              {item.name}
            </Text>
            <View style={{ display: "flex", alignItems: "center" }}>
              {/* <Image
              source={require("../assets/images/fullstar.png")}
              style={{ height: 4, width:4 }}
            /> */}
              <Text>
                <Text style={{ color: "green", fontWeight: 700 }}>
                  {item.stars}
                </Text>
                <Text style={{ color: "green", fontWeight: 700 }}>
                  ({item.reviews} review) .
                  <Text style={{ fontWeight: 600 }}>{item.category}</Text>
                </Text>
              </Text>
            </View>
            <View>
              <Feather name="map-pin" color="gray" width="15" height="15" />
              <Text style={{ color: "gray", fontWeight: 700 }}>
                Nearby* {item.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCars;

const styles = StyleSheet.create({});
