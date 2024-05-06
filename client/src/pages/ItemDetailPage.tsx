import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemWithDescription } from "../models";
import { getItemDetail } from "../repo/item-detail.repository";
import { ItemDetailComponent } from "../components/item-detail/ItemDetail";

export const ItemDetailPage = () => {
  const [data, setData] = useState<ItemWithDescription>();
  const { id } = useParams();

  const fetchData = async (value: string) => {
    const response = await getItemDetail(value);
    setData(response.item);
  };
  useEffect(() => {
    if (id !== undefined) fetchData(id);
  }, []);
  return <>{data !== undefined && <ItemDetailComponent data={data} />}</>;
};
