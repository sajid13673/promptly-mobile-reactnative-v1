import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SimpleKeyboardScreen() {
  const { logout } = useAuth();
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={0}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-center px-6 bg-primary p-4">
          <TouchableOpacity onPress={logout}>
            <Text className="text-white text-center">Logout</Text>
          </TouchableOpacity>
          <Text className="text-white text-2xl font-semibold text-center">
            {"What's on your mind today ?"}
          </Text>

          <View className="flex-row bg-gray-900 py-2 px-4 rounded-3xl items-center mt-10">
            <TextInput
              placeholder="Ask anything"
              placeholderTextColor="#cbd5e1"
              className="flex-1 rounded-xl px-4 py-3 bg-gray-900 text-gray-300 mr-3"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Ionicons name="send" size={24} color="white" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
