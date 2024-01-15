import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
//components
import Card from "../components/Card";
import Loader from "../components/Loader";
//icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
//styles
import styles from "./ProductsPage.module.css";
//helper functions
import {
  createQueryObjet,
  filterProducts,
  getInitialQuery,
  serachProducts,
} from "../helpers/helpers";

function ProductsPage(props) {
  //states
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  //useeffects
  useEffect(() => {
    setDisplayed(products);
    setSearch(query.search);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = serachProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    // console.log(query);
    setDisplayed(finalProducts);
    console.log(finalProducts);
  }, [query]);

  //functions
  const serachHandler = () => {
    setQuery((query) => createQueryObjet(query, { search }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObjet(query, { category }));
  };

  // console.log(products);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        ></input>
        <button type="submit" onClick={serachHandler}>
          <ImSearch></ImSearch>
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <span>Categories</span>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
