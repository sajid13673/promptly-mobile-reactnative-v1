import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const register = () => {
  return (
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
        <TextInput
          placeholder="Password"
          placeholderTextColor="#cbd5e1"
          secureTextEntry
          className="bg-white rounded-xl py-3 text-gray-900"
        />
      </View>
      <View className="mb-6">
        <Text className="text-white mb-2">Confirm Password</Text>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#cbd5e1"
          className="bg-white rounded-xl py-3 text-gray-900"
          secureTextEntry
        />
      </View>
      <TouchableOpacity className="bg-secondary py-4 rounded-xl mb-4">
        <Text className="text-center text-white font-semibold text-lg">
          Register
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-center">
        <Text className="text-white/70">Already have an account ?</Text>
        <Link href="/login" className="text-white font-semibold ml-1">Sign Up</Link>
      </View>
    </View>
  );
};

export default register;
