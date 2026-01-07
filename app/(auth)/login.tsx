import { Link } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const login = () => {
  return (
     <View className="flex-1 bg-primary px-6 justify-center">
      
      <Text className="text-white text-3xl font-bold mb-2">
        Welcome Back
      </Text>
      <Text className="text-white/70 mb-8">
        Login to continue
      </Text>

      <View className="mb-4">
        <Text className="text-white mb-2">Email</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#cbd5e1"
          className="bg-white rounded-xl px-4 py-3 text-gray-900"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="mb-6">
        <Text className="text-white mb-2">Password</Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#cbd5e1"
          className="bg-white rounded-xl px-4 py-3 text-gray-900"
          secureTextEntry
        />
      </View>

      <TouchableOpacity className="bg-secondary py-4 rounded-xl mb-4">
        <Text className="text-center text-white font-semibold text-lg">
          Login
        </Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-white/70">
          Don’t have an account?
        </Text>
        <Link href="/(auth)/register" className="text-white font-semibold ml-1">
          Sign up
        </Link>
      </View>

    </View>
  )
}

export default login