import React from 'react';
import {RotatingLines} from 'react-loader-spinner';

import styles from './Loader.module.css';

function Loader(props) {
    return (
        <div className={styles.loader}>
            <RotatingLines
            visible={true}
            height="76px"
            width="76px"
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
    );
}

export default Loader;