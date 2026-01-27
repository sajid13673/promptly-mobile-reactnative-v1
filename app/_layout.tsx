import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import "./global.css";

function RootLayoutNav() {
  const insets = useSafeAreaInsets();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-primary">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <Stack screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="(auth)" />
          ) : (
            <Stack.Screen name="(app)" />
          )}
        </Stack>
      </View>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
