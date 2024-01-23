import { ImSearch } from "react-icons/im";
import { createQueryObjet } from "../helpers/helpers";

import styles from './SearchBox.module.css'

function SearchBox({search,setSearch,setQuery}) {

    const serachHandler = () => {
        setQuery((query) => createQueryObjet(query, { search }));
      };

    return (
        <div className={styles.search}>
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
    );
}

export default SearchBox;