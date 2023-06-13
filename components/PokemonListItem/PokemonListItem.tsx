import React from "react";
import {View, Text, Pressable} from "react-native";

import {Pokemon} from "../../models/Pokemon";

interface Props {
  pokemon: Pokemon;
  onPressItem?: () => void;
}

const PokemonListItem: React.FC<Props> = ({pokemon, onPressItem}: Props) => {
  return (
    <Pressable onPress={onPressItem}>
      <View className="width-full justify-start bg-slate-200 dark:bg-slate-900 py-10 px-3 my-1 rounded-md">
        <Text className="text-lg text-sky-800 dark:text-sky-200">
          {pokemon.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default PokemonListItem;
