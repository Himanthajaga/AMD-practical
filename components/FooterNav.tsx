import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const FooterNav = () => {
  return (
      <View
      className="w-full flex-row bg-[#e74c3c] p-[50px]"
      style={{
        justifyContent: "space-evenly",
       
      }}
    >
      <Link
        href={"/"}
        style={{
          color: "white",
          fontSize: 20,
        }}
      >
        Home
      </Link>

      <View>
        <Link
          href={"/user"}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          User
        </Link>
      </View>
      <View>
        <Link
          href={"/profile"}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Profile
        </Link>
      </View>
      <View>
        <Link
          href={"/login"}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Login
        </Link>
      </View>
    </View>
  );
}

export default FooterNav