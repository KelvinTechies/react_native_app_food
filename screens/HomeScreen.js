import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, EvilIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import { feaured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.header1}>
          <View style={styles.header_icon}>
            <Feather name="search" size={24} color="gray" />
            <TextInput placeholder="Restaurant" />
          </View>
          <View style={styles.header_icon}>
            <Feather name="map-pin" size={24} color="gray" />
            <Text>New York, NYC</Text>
          </View>
        </View>
        <View style={styles.last_header_icon}>
          <Feather name="sliders" size={24} color="#fff" />
        </View>
      </View>

      {/* main */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />

        <View style={{ marginTop: 5 }}>
          {[feaured, feaured, feaured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    justifyContent: "center",
    gap: 10,
  },
  header1: {
    display: "flex",
    flexDirection: "row",
    width: 340,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  header_icon: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  last_header_icon: {
    backgroundColor: "orangered",
    borderRadius: 100,
    padding: 15,
  },
});
