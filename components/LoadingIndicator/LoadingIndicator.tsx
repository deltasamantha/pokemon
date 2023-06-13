import React from "react";
import {View, Text} from "react-native";

interface Props {
  text: string;
}

const LoadingIndicator: React.FC<Props> = ({text}: Props) => {
  return (
    <View className="w-full mx-auto px-10 py-10 bg-cyan-200 dark:bg-emerald-800 rounded-md">
      <Text className="text-xl text-emerald-800 dark:text-cyan-200">
        {text}
      </Text>
    </View>
  );
};

export default LoadingIndicator;
