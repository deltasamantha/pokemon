import {api} from "./HTTPClient";
import {ApiResponse, RequestOptions} from "../models/Api";

export const get = <T>(options: RequestOptions) => {
  return api
    .get<T>(options.path, {params: options.query})
    .then(res => {
      return res as ApiResponse<T>;
    })
    .catch(error => {
      throw new Error(error);
    });
};
