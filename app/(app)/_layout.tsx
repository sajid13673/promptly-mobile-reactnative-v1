import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          headerStatusBarHeight: 1,
          drawerContentStyle: {
            backgroundColor: "#151312",
          },
          headerTintColor: "#fff",
          headerTransparent: true,
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
