import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
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
      {/* White form container */}
      <View
        style={{
          backgroundColor: "white",
          padding: 30,
          borderRadius: 10,
          width: "90%",
          maxWidth: 400,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text style={{ color: "black", fontSize: 24, marginBottom: 20 }}>
          Login
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Welcome back! Please sign in to your account.
        </Text>

        <TextInput
          placeholder="Email"
          style={{
            marginBottom: 15,
            padding: 12,
            backgroundColor: "#f5f5f5",
            color: "black",
            borderRadius: 5,
            width: "100%",
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            marginBottom: 20,
            padding: 12,
            backgroundColor: "#f5f5f5",
            color: "black",
            borderRadius: 5,
            width: "100%",
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        />

        <TouchableOpacity
          onPress={() => router.push("/")}
          style={{
            marginBottom: 10,
            padding: 12,
            backgroundColor: "green",
            borderRadius: 5,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 12,
            backgroundColor: "blue",
            borderRadius: 5,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
