import { router } from "expo-router";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
const Login = () => {
    const { isUser,login,logout } = useAuth()
    const handleLogin = () => {
        // Handle login logic here
        Login()
    }

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
          placeholder="username"
          placeholderTextColor={"#9ca3f"}
          className="2-full p-3 bg-gray-200 text-black rounded-md mb-4"
        />
        <TextInput
                  placeholder="Password"
                  placeholderTextColor={"#9ca3f"}
          className="2-full p-3 bg-gray-200 text-black rounded-md mb-4"
          secureTextEntry={true}
        />

              <TouchableOpacity
                  className="bg-red-500 p-3 rounded-md mb-4 w-full flex-row items-center justify-center"
          onPress={() => router.push("/")}
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
