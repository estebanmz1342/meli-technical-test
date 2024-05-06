import { BaseResponse } from "./base-response.model";
import { ItemWithDescription } from "./item.model";

export interface ItemDetailResponse extends BaseResponse {
  item: ItemWithDescription;
}
