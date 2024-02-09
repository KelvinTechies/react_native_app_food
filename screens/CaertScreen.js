import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { themeColor } from "../themes";
import { useNavigation } from "@react-navigation/native";
import { feaured } from "../constants";

const CaertScreen = () => {
  const navigation = useNavigation();
  const restaurant = feaured.restaurants[0];
  return (
    <View
      style={{
        backgroundColor: "white",
        display: "flex",
        flex: 1,
      }}
    >
      <View style={{ position: "relative", paddingBottom: 4 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "orange",
            position: "absolute",
            zIndex: 10,
            borderRadius: 100,
            padding: 1,
            top: 25,
            left: 12,
          }}
        >
          <Feather name="arrow-left" color={"white"} size={30} />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            padding: 1,
            top: 25,
            right: 0,
            left: 0,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: 900 }}>
            Your Cart
          </Text>
          <Text style={{ textAlign: "center", color: "grey" }}>
            {restaurant.name}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#EED6E599",
          display: "flex",
          flexDirection: "row",
          paddingLeft: 4,
          alignItems: "center",
          position: "relative",
          marginTop: 130,
        }}
      >
        <Image
          source={require("../assets/images/bicycle-delivery_23-2148146777-removebg-preview.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ flex: 1 }}>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 700, color: themeColor.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={{ backgroundColor: "#fff" }}
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 2,
                paddingLeft: 5,
                backgroundColor: "white",
                borderRadius: 10,
                marginLeft: 5,
                marginBottom: 13,
                gap: 20,
              }}
            >
              <Text style={{ fontWeight: 700, color: themeColor.text }}>
                x2{" "}
              </Text>
              <Image
                source={dish.image}
                style={{ width: 100, height: 100 }}
                borderRadius={200}
              />
              <Text style={{ flex: 1, fontWeight: 700, color: "grey" }}>
                {dish.name}
              </Text>
              <Text style={{ flex: 1, fontWeight: 600 }}>${dish.price}</Text>
              <TouchableOpacity
                style={{
                  padding: 1,
                  borderRadius: 200,
                  backgroundColor: "orange",
                }}
              >
                <Feather name="minus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          padding: 36,
          paddingLeft: 16,
          borderRadius: 30,
          backgroundColor: "#EED6E599",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "grey", fontWeight: 700 }}>subTotal</Text>
          <Text style={{ color: "grey", fontWeight: 700 }}>$120</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "grey", fontWeight: 700 }}>Delivery Fee</Text>
          <Text style={{ color: "grey", fontWeight: 700 }}>$20</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "grey", fontWeight: 700 }}>Order Total</Text>
          <Text style={{ color: "grey", fontWeight: 700 }}>$45</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("orderPreparing")}
            style={{
              backgroundColor: "orange",
              padding: 20,
              borderRadius: 20,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CaertScreen;
