import { View, Text } from 'react-native'
import React from 'react'

export default function ProfileScreen () {
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
      <Text style={{ color: "white", fontSize: 24 }}>ProfileScreen</Text>
    </View>
  );
}