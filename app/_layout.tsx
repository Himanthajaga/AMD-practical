import { Link, Slot, usePathname } from "expo-router";
import React from "react";
import { View } from "react-native";
import "./../global.css"; // Import global styles
import FooterNav from "@/components/FooterNav";
const RootLayout = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname); // Log the current pathname for debugging

  const hideFooter = ["/signup", "/login"].includes(pathname);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
      className="bg-green-500"
    >
      <Slot />
      {hideFooter ? null : (
       <FooterNav />
      )}
    </View>
  );
};

export default RootLayout;
