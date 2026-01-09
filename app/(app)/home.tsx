import { MaterialIcons } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-primary p-4 justify-between">
      <View className="flex-1 justify-center">
        <Text className="text-white text-2xl font-semibold text-center">
          What's on your mind today?
        </Text>
      </View>

      <View className="border-gray-500 border-2 rounded-3xl flex-row items-center py-3 px-3 mb-4 gap-2">
        <TextInput
          placeholder="Ask me anything"
          placeholderTextColor="#ADADAD"
          className="flex-1 text-white pr-2"
        />
        <TouchableOpacity>
          <MaterialIcons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
