import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const SelectedItem = () => {
    const params = useLocalSearchParams()
    console.log("Selected Item ID:", params.id, "Name:", params.name, "Age:", params.age, "Address:", params.address);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
          <Text
          style={{ color: "white", fontSize: 24 }}
          >Item Detail</Text>
            <Text
              style={{ color: "white", fontSize: 18 }}
          >Selected Item ID: {params.id}</Text>
            <Text
              style={{ color: "white", fontSize: 18 }}
          >Name: {params.name}</Text>
            <Text
              style={{ color: "white", fontSize: 18 }}
          >Age: {params.age}</Text>
            <Text
              style={{ color: "white", fontSize: 18 }}
          >Address: {params.address}</Text>
    </View>
  );
}

export default SelectedItem;