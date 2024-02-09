import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OrderPreparingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("delivery");
    }, 3000);
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/images/7771777_3699591-removebg-preview.png")}
      />
    </View>
  );
};

export default OrderPreparingScreen;

const styles = StyleSheet.create({});
