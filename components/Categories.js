import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View style={styles.categoryHead}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          // let btnClass=isActive?
          return (
            <View key={index} style={styles.cat_head}>
              <TouchableOpacity
                style={isActive ? styles.cat_options : styles.notActiveClass}
              >
                <Text>{category.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryHead: {
    marginTop: 5,
  },
  cat_head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    gap: 15,
    width: 100,
  },
  cat_options: {
    padding: 1,
    borderRadius: 10,
    backgroundColor: "black",
  },
  notActiveClass: {
    padding: 1,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
});
