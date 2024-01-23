import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
//components
import Card from "../components/Card";
import Loader from "../components/Loader";

//styles
import styles from "./ProductsPage.module.css";
//helper functions
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helpers";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

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
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    // console.log(query);
    setDisplayed(finalProducts);
    // console.log(finalProducts);
  }, [query]);


  // console.log(products);
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery}/>
      </div>
    </>
  );
}

export default ProductsPage;
