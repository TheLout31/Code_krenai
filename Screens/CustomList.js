import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function CustomList({ item }) {
  return (
    <View style={styles.press}>
      <View>
        <Image source={{ uri: item.mediaUrl }} style={styles.Image} />
      </View>
      <View style={{ position: "absolute", paddingLeft:147}}>
        <Ionicons  name="heart-outline" size={30} color='black'/>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingTop: 8,
          paddingBottom: 10,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <Text numberOfLines={4} style={{ fontWeight: "500" }}>
          {item.name}
        </Text>
        <Text numberOfLines={4} style={{ fontWeight: "300" }}>
          {item.category[0].name}
        </Text>
        <Text numberOfLines={4} style={{ fontWeight: "400" }}>
          ${item.variants[0].mrp}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  MainText: {
    fontWeight: "500",
    fontSize: 20,
  },
  Image: {
    height: 150,
    borderRadius: 10,
  },
  press: {
    width: 180,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    shadowOpacity: 0.2,
    marginRight: 10,
  },
});
