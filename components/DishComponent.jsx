import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeColor } from "../themes";
import { Feather } from "@expo/vector-icons";

const DishComponent = ({ item }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 25,
        marginLeft: 5,
        marginBottom: 20,
        flexDirection: "row",
        padding: 3,
        gap: 12,
        marginTop: 10,
      }}
    >
      <Image
        style={{ borderRadius: 40, height: 100, width: 100 }}
        source={item.image}
      />
      <View style={{ display: "flex", flex: 1 }}>
        <Text>{item.name}</Text>
        <Text style={{ color: "gray", fontWeight: 700 }}>
          {item.description}
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: 700, fontSize: 20 }}>
            ${item.price}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                borderRadius: 100,
                padding: 1,
                height: 30,
                width: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="minus" height="30" width="30" color="#fff" />
            </TouchableOpacity>
            <Text style={{ paddingLeft: 3, paddingRight: 3 }}>{2}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                borderRadius: 100,
                padding: 1,
                height: 30,
                width: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="plus" height="30" width="30" color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishComponent;

const styles = StyleSheet.create({});
