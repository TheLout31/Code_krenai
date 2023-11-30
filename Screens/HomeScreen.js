import { View, StyleSheet, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import CustomList from "../Screens/CustomList";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let itemperpage = 6;

  const fetchUsers = async () => {
    loadingIndicator;
    try {
      const response = await fetch(
        `https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=${currentPage}&itemsPerPage=${itemperpage}&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100`
      );
      const result = await response.json();
      setUsers((prevData) => [...prevData, ...result.object]);
      setCurrentPage((prevpage) => prevpage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loadingIndicator = () => {
    return (
      <View>
        <Text>Loading..</Text>
      </View>
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 16,
        paddingLeft: 10,
        paddingRight: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={users}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <CustomList item={item} />;
        }}
        onEndReached={fetchUsers}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
