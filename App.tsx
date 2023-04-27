import {StatusBar} from "expo-status-bar";
import {useColorScheme} from "nativewind";
import {Pressable, Switch, Text, View} from "react-native";

const App: React.FC = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-gray-800">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <Text className="text-red-500 text-2xl dark:text-gray-100">Pokémon</Text>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Pressable className="bg-slate-800 dark:bg-white w-fit mt-2 py-[10px] px-10 rounded-full items-center">
        <Text className="text-[16px] font-bold text-slate-100 dark:text-slate-900">
          Click me
        </Text>
      </Pressable>
    </View>
  );
};

export default App;
