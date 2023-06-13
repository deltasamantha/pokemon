import {QueryClientProvider} from "@tanstack/react-query";
import {StatusBar} from "expo-status-bar";
import {useColorScheme} from "nativewind";
import {SafeAreaProvider} from "react-native-safe-area-context";

import AppQueryClient from "./config/QueryClientConfig";
import AppNavigator from "./navigation/AppNavigator";

const App: React.FC = () => {
  const {colorScheme} = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <QueryClientProvider client={AppQueryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
