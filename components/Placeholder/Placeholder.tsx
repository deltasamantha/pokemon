import React, {PropsWithChildren} from "react";
import {Text, View} from "react-native";

interface Props {
  text: string;
}

const Placeholder: React.FC<PropsWithChildren<Props>> = ({children, text}) => {
  return (
    <View className="w-full mx-auto px-10 py-10 bg-rose-200 dark:bg-rose-800 rounded-md ">
      <Text className="text-xl text-red-800 dark:text-red-200">{text}</Text>
    </View>
  );
};

export default Placeholder;
