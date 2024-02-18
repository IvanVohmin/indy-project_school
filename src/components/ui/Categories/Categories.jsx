import React from 'react';
import styles from "./Categories.module.css"

const Categories = (props) => {

    const [currentCat, setCurrentCat] = React.useState(props.current)

    const handleChange = (arg) => {
        setCurrentCat(arg)
        props.changeCategory(arg)
    }

    const CatLink = (props) => {
        return (
            <div className={`${styles.catLink} ${currentCat === props.title && styles.catLinkActive}`} onClick={() => handleChange(props.title)}>
                <div className={styles.catLinkInner}>
                    {props.title}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={styles.categories}>
                <div className={styles.categoriesInner}>
                    <CatLink title='Напитки' />
                    <CatLink title='Выпечка' />
                    <CatLink title='Горячее' />
                </div>
            </div>
        </>
    );
}

export default Categories;
