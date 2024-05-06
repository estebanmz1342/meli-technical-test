import { Route, Routes, useLocation } from "react-router-dom";
import { ItemPage } from "../pages/ItemPage";
import { SearchToolbar } from "../components/searchtoolbar/SearchToolbar";
import { useEffect, useState } from "react";
import { searchItem } from "../repo/search.repository";
import { Item } from "../models";
import { ItemDetailPage } from "../pages/ItemDetailPage";

export const Router = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<Item[]>([]);
  const location = useLocation();

  const fetchData = async () => {
    const response = await searchItem(searchText);
    setData(response.items);
  };

  useEffect(() => {
    if (searchText !== "") fetchData();
    if (location.search !== "" && location.search.split("=")[1] !== searchText)
      setSearchText(location.search.split("=")[1]);
  }, [searchText]);

  return (
    <>
      <SearchToolbar valueForSearch={setSearchText}></SearchToolbar>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/items" element={<ItemPage data={data} />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
      </Routes>
    </>
  );
};
