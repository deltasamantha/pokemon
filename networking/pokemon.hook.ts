import {useQuery} from "@tanstack/react-query";

import {get} from "./ApiClient";
import {Pokemon} from "../models/Pokemon";

export const usePokemonList = () => {
  const {data, ...rest} = useQuery(["pokemon"], () => {
    return get<Pokemon[]>({path: "/pokemon"}).then(res => res.data.results);
  });
  return {pokemonList: data, ...rest};
};
