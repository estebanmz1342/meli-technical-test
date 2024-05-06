import axios from "axios";
import { SearchResponse } from "../models";
import { SEARCH_URL } from "../globals";

export const searchItem = async (value: string): Promise<SearchResponse> => {
  const response = await axios.get(`${SEARCH_URL}${value}`);
  return Promise.resolve(response.data);
};
