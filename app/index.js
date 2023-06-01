import { useState } from "react";

import { Button, SafeAreaView, ScrollView, View } from "react-native";

import { COLORS } from "../constant";

import { Stack, useRouter } from "expo-router";

import ConnectButton from "../components/ConnectButton";
import DisconnectButton from "../components/DisconnectButton";

const Home = () => {
  const router = useRouter();
  return (

    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => {
              <Button color="red" dimension='60%'/>
            },
            headerRight: () => {
              <Button color="red" dimension='60%'/>
            },
            title : ""
          }}
        />
      </SafeAreaView>

      <ConnectButton/>
    
    </>
  );
};

export default Home