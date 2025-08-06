import { View, Text, TextInput } from 'react-native'
import React from 'react'


// <div> - <view>
//paragraph - <text>
// <input> - <textinput>
const Index = () => {
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
      <Text style={{ color: "white", fontSize: 24 }}>
        hellooo
      </Text>
    </View>
  );
}

export default Index