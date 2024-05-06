import React from "react";
import { ItemWithDescription } from "../../models";
import "./itemdetail.scss";
import { format } from "../../lib/format";

interface ItemDetailComponentProps {
  data: ItemWithDescription;
}

export const ItemDetailComponent: React.FC<ItemDetailComponentProps> = ({
  data,
}) => {
  return (
    <article className="item-details-container">
      <div className="item-detail">
        <div className="image">
          <img src={data.picture} alt={data.title} />
        </div>
        <div className="description">
          <h3>Descripción del producto</h3>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="item-info">
        <div>
          <p className="additional-info">
            {data.condition == "new" ? "Nuevo" : "Usado"} - {data.sold_quantity}{" "}
            unidades
          </p>
          <h1 className="title">{data.title}</h1>
          <p className="price">
            {format(data.price.amount)}
            <span>{data.price.decimals ?? "00"}</span>
          </p>
        </div>
        <button className="buy-button">Comprar</button>
      </div>
    </article>
  );
};
