import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function Conversation() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Conversation</Text>
    </View>
  );
}

export default Conversation;
