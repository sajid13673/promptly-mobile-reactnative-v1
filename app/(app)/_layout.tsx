import { useAuth } from "@/context/AuthContext";
import { Feather } from "@expo/vector-icons";
import { MenuView } from "@react-native-menu/menu";
import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { TouchableOpacity } from "react-native";
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
            headerRight: () => (
              <MenuView
                title="Menu Options"
                onPressAction={({ nativeEvent }) => {
                  console.log("Selected:", nativeEvent.event);
                }}
                actions={[
                  { id: "profile", title: "Profile" },
                  { id: "settings", title: "Settings" },
                  {
                    id: "logout",
                    title: "Logout",
                    attributes: { destructive: true },
                  },
                ]}
                shouldOpenOnLongPress={false}
              >
                <TouchableOpacity style={{ marginRight: 15 }}>
                  {/* <Ionicons name="ellipsis-vertical" size={24} color="white" /> */}
                  <Feather name="settings" size={24} color="white" />
                </TouchableOpacity>
              </MenuView>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
