import React from "react";
import { Item } from "../../models";
import { Link } from "react-router-dom";
import "./item.scss";
import { format } from "../../lib/format";

export const ItemComponent: React.FC<Item> = ({
  id,
  picture,
  price,
  title,
}) => {
  return (
    <Link to={`/items/${id}`} className="item-container">
      <div className="item-image-container">
        <img src={picture} alt={title} />
      </div>
      <div className="item-detail-container">
        <p className="price">{format(price.amount)}</p>
        <h4 className="item-title">{title}</h4>
      </div>
    </Link>
  );
};
