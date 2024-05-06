import React, { useState } from "react";
import "./searchtoolbar.scss";
import { useNavigate } from "react-router-dom";

interface SearchToolbarProps {
  valueForSearch: (value: string) => void;
}

export const SearchToolbar: React.FC<SearchToolbarProps> = ({
  valueForSearch,
}) => {
  const [value, setValue] = useState<string>("");

  const router = useNavigate();
  return (
    <div className="container">
      <div className="toolbar">
        <img
          src="src/assets/MELI.png"
          alt="Logo MercadoLibre"
          className="logo"
        />
        <form
          className="search-container"
          onSubmit={(e) => {
            e.preventDefault();
            router(`/items?search=${value}`);
            valueForSearch(value);
          }}
        >
          <input
            type="text"
            className="searchbar"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="search-button" type="submit">
            <img
              src="src/assets/search-icon.svg"
              alt="Icono de busqueda para un elemento"
            />
          </button>
        </form>
      </div>
    </div>
  );
};
