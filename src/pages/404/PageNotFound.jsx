import React from 'react';
import styles from "./Styles.module.css"
import {Link} from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <div className={styles.pageNotFound}>
                <div className={styles.wrapper}>
                    <h1 className={styles.number}>404</h1>
                    <h3>Страница не найдена.</h3>
                    <Link to="/" className={styles.tomain}>На главную</Link>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;
