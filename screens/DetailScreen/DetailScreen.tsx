import React from "react";
import {Text} from "react-native";

import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";

const DetailScreen = () => {
  return (
    <ScreenContainer>
      <Text className="font-semibold text-2xl text-orange-700 dark:text-orange-300 mt-2">
        Detail Screen
      </Text>
    </ScreenContainer>
  );
};
 
export default DetailScreen;
