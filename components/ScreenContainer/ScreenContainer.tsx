import React, {PropsWithChildren} from "react";
import {View} from "react-native";

const ScreenContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <View className="container flex-1 items-center px-5 bg-slate-100 dark:bg-gray-800">
      {children}
    </View>
  );
};

export default ScreenContainer;
