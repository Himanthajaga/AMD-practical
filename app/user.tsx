import { View, Text } from 'react-native'
import React from 'react'

const UserScreen = () => {
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
      <Text style={{ color: "white", fontSize: 24 }}>This is user Screen</Text>
    </View>
  );
}
export default UserScreen