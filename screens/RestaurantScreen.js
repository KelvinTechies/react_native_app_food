import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { themeColor } from "../themes";
import DishComponent from "../components/DishComponent";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux/Slices/restaurant";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  let items = params;
  const dispatch = useDispatch();
  /*  useEffect(() => {
    if (items && items.id) {
      dispatch(setRestaurant({ ...items }));
    }
  }, []); */
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />

      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image style={{ width: "100%", height: 300 }} source={items.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              backgroundColor: "#f4f4f4",
              borderRadius: 100,
              padding: 2,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather
              name="arrow-left"
              size={25}
              color={themeColor.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "#fff",
            marginTop: 2,
            paddingTop: 4,
          }}
        >
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>{items.name}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View style={{ display: "flex", alignItems: "center" }}>
              {/* <Image
              source={require("../assets/images/fullstar.png")}
              style={{ height: 4, width:4 }}
            /> */}
              <Text>
                <Text style={{ color: "green", fontWeight: 700 }}>
                  {items.stars}
                </Text>
                <Text style={{ color: "green", fontWeight: 700 }}>
                  ({items.reviews} review) .
                  <Text style={{ fontWeight: 600 }}>{items.category}</Text>
                </Text>
              </Text>
            </View>
            <View>
              <Text style={{ color: "gray", fontWeight: 700 }}>
                <Feather name="map-pin" color="gray" width="15" height="15" />{" "}
                Nearby* {items.address}
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 2,
              color: "gray",
              fontWeight: 500,
            }}
          >
            {items.description}
          </Text>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <Text
            style={{
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 4,
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Menu
          </Text>
          {/* Dishes */}
          {items.dishes.map((dish, index) => {
            return <DishComponent item={{ ...dish }} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
