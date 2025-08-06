import { Link, Slot, usePathname } from "expo-router";
import React from "react";
import { View } from "react-native";
import "./../global.css"; // Import global styles
import FooterNav from "@/components/FooterNav";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";


const user = {};
const RootLayout = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname); // Log the current pathname for debugging

  const hideFooter = ["/signup", "/login"].includes(pathname);
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
          className="bg-green-500"
        >
          <Slot />
          {hideFooter ? null : <FooterNav />}
        </View>
      </SafeAreaView>
    </AuthProvider>
  );
};

export default RootLayout;
