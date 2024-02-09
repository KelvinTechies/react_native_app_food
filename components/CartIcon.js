import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColor } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: -41,
        width: "100%",
        zIndex: 50,
        marginTop: 100,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("cart")}
        style={{
          backgroundColor: "orange",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 5,
          padding: 4,
          borderRadius: 30,
          paddingBottom: 3,
          height: 50,
        }}
      >
        <View
          style={{
            padding: 2,
            paddingLeft: 4,
            borderRadius: 30,
            backgroundColor: "rgba('255,255,255,0.3')",
          }}
        >
          <Text style={{ borderRadius: 100, fontWeight: 700, color: "#fff" }}>
            3
          </Text>
        </View>
        <Text style={{ fontWeight: 700, color: "#fff" }}>View Cart</Text>
        <Text style={{ fontWeight: 700, color: "#fff" }}>${30}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;

const styles = StyleSheet.create({});
