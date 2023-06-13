import {NavigationContainer} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {useColorScheme} from "nativewind";
import React from "react";
import {Text, View} from "react-native";
import colors from "tailwindcss/colors";

import DetailScreen from "../screens/DetailScreen/DetailScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

export type AppNavParams = {
  Home: undefined;
  Detail: undefined;
};

export type AppNavProp = NativeStackNavigationProp<AppNavParams>;

const AppNavStack = createNativeStackNavigator<AppNavParams>();

const AppNavigator: React.FC = () => {
  const {colorScheme} = useColorScheme();

  return (
    <NavigationContainer>
      <AppNavStack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerBackground: () => (
            <View className="flex-1 bg-gray-200 dark:bg-gray-900 " />
          ),
          headerTitle: ({children}: {children: string}) => (
            <Text className="font-semibold text-xl text-gray-900 dark:text-slate-100">
              {children}
            </Text>
          ),
          headerTintColor:
            colorScheme === "dark" ? colors.slate[200] : colors.gray[800],
        }}>
        <AppNavStack.Screen name="Home" component={HomeScreen} />
        <AppNavStack.Screen name="Detail" component={DetailScreen} />
      </AppNavStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
