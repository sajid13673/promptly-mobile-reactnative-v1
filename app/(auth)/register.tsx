import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
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
        <View className="bg-primary flex-1 px-6 justify-center">
          <Text className="text-white text-3xl font-bold mb-5">Register</Text>
          <View className="mb-6">
            <Text className="text-white mb-2">Full Name</Text>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#cbd5e1"
              className="bg-white rounded-xl py-3 text-gray-900"
            />
          </View>
          <View className="mb-6">
            <Text className="text-white mb-2">Email</Text>
            <TextInput
              placeholder="you@mail.com"
              placeholderTextColor="#cbd5e1"
              className="bg-white rounded-xl py-3 text-gray-900"
            />
          </View>
          <View className="mb-6">
            <Text className="text-white mb-2">Password</Text>
            <View className="bg-white flex-row rounded-xl items-center px-2">
              <TextInput
                placeholder="Password"
                placeholderTextColor="#cbd5e1"
                secureTextEntry={!showPassword}
                className="bg-white rounded-xl py-3 text-gray-900 flex-1"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <AntDesign
                  name={showPassword ? "eye" : "eye-invisible"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="mb-6">
            <Text className="text-white mb-2">Confirm Password</Text>
            <View className="bg-white flex-row rounded-xl items-center px-2">
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#cbd5e1"
                className="bg-white rounded-xl py-3 text-gray-900 flex-1"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <AntDesign
                  name={showConfirmPassword ? "eye" : "eye-invisible"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity className="bg-secondary py-4 rounded-xl mb-4">
            <Text className="text-center text-white font-semibold text-lg">
              Register
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white/70">Already have an account ?</Text>
            <Link href="/login" className="text-white font-semibold ml-1">
              Sign Up
            </Link>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default Register;
