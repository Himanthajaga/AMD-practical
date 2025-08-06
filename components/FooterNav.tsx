import { Link, useRouter, useSegments } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

const FooterNav = () => {
    const router = useRouter();// Assuming you have useRouter imported from 'expo-router'
    const segment = useSegments();
    const activeRouter = segment[0] ?? ("" as string);
  return (
    <View
      className="w-full flex-row bg-[#e74c3c] p-[50px]"
      style={{
        justifyContent: "space-evenly",
      }}
    >
      <Pressable
        onPress={() => router.push("/")}
        className="text-black text-[20px] bg-[#3ce775] p-2 rounded"
      >
        Home
      </Pressable>

      <View>
        <Pressable
                  onPress={() => router.push("/user")}
                  className={ `${activeRouter === "user" ? "text-blue-500" : "text-white"} text-[20px]`}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          User
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => router.push("/profile")}
          href={"/profile"}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Profile
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => router.push("/login")}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Login
        </Pressable>
      </View>
      <View>
        <Link
          href={{
            pathname: "/item/[id]",
            params: {
              name: "jaga",
              id: "123",
              age: 20,
              address: "123 Street, City, Country",
            },
          }}
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Go to Item
        </Link>
      </View>
    </View>
  );
};

export default FooterNav;
