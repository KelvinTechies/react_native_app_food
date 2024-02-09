import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { themeColor } from "../themes";
import RestaurantCars from "./RestaurantCars";

const FeaturedRow = ({ title, restaurants, description }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 4,
          paddingRight: 8,
        }}
      >
        <View>
          <Text style={{ fontWeight: 800, fontSize: 20 }}>{title}</Text>
          <Text style={{ color: "#aaa" }}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColor.text, fontWeight: 600 }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ paddingBottom: 5 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15 }}
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCars item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
