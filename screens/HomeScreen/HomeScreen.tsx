import {useNavigation} from "@react-navigation/native";
import {useColorScheme} from "nativewind";
import React from "react";
import {Text, Switch, Pressable, FlatList} from "react-native";

import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import Placeholder from "../../components/Placeholder/Placeholder";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import {AppNavProp} from "../../navigation/AppNavigator";
import {usePokemonList} from "../../networking/pokemon.hook";

const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation<AppNavProp>();
  const {colorScheme, toggleColorScheme} = useColorScheme();

  const {pokemonList, isLoading, isError} = usePokemonList();

  const goToDetailScreen = () => {
    navigate("Detail");
  };

  return (
    <ScreenContainer>
      <Switch
        value={colorScheme === "dark"}
        onChange={toggleColorScheme}
        className="mt-5"
      />
      <Text className="text-red-500 text-2xl dark:text-yellow-400">
        Pokémon
      </Text>
      <Pressable
        className="bg-slate-800 dark:bg-white w-fit mt-2 py-[10px] px-10 rounded-full items-center my-5"
        onPress={goToDetailScreen}>
        <Text className="text-[16px] font-bold text-slate-100 dark:text-slate-900">
          Click me
        </Text>
      </Pressable>
      {isLoading && <LoadingIndicator text="Loading..." />}
      {isError && <Placeholder text="Something went wrong" />}
      {!isLoading && !isError && (
        <FlatList
          data={pokemonList}
          renderItem={({item: pokemon}) => (
            <PokemonListItem
              pokemon={pokemon}
              onPressItem={() => {
                console.log("Pokemon ", pokemon.name);
              }}
            />
          )}
          ListEmptyComponent={
            <Placeholder text="No data available to display...." />
          }
          keyExtractor={(item, index) =>
            `${item.name.replace(" ", "_")}_${index}`
          }
          className="container"
          showsVerticalScrollIndicator={false}
        />
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
