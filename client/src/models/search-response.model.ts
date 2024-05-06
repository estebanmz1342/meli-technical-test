import { BaseResponse } from "./base-response.model";
import { Item } from "./item.model";

export interface SearchResponse extends BaseResponse {
  categories: string[];
  items: Item[];
}
