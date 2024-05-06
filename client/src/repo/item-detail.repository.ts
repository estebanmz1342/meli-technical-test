import axios from "axios";
import { ItemDetailResponse } from "../models";
import { ITEMS_URL } from "../globals";

export const getItemDetail = async (
  value: string
): Promise<ItemDetailResponse> => {
  const response = await axios.get(`${ITEMS_URL}${value}`);
  return Promise.resolve(response.data);
};
