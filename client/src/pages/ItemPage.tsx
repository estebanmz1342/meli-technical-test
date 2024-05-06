import React from "react";
import { ItemComponent } from "../components/item/Item";
import { Item } from "../models";

interface ItemPageProps {
  data: Item[];
}

export const ItemPage: React.FC<ItemPageProps> = ({ data }) => {
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto", background: "white" }}>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <ItemComponent
                key={item.id}
                title={item.title}
                id={item.id}
                picture={item.picture}
                condition={""}
                free_shipping={false}
                price={{
                  currency: item.price.currency,
                  amount: item.price.amount,
                  decimals: item.price.decimals,
                }}
              />
            );
          })}
      </div>
    </>
  );
};
