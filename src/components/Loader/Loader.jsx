import React, { useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from "./Loader.module.css"

import { motion, AnimatePresence } from "framer-motion"
import { BounceLoader } from 'react-spinners';


const Loader = ({ children }) => {

    const loadingDelay = 0.5; // в сек

    const { authUser } = React.useContext(UserContext)

    const [loaderState, setLoaderState] = React.useState(true)

    const isUserContextLoaded = authUser.loaded

    useEffect(() => {
        if (isUserContextLoaded) {
            // console.log(`[Loader.jsx] user context loaded.`)
            setTimeout(() => {
                setLoaderState(false)
            }, loadingDelay * 1000)
        }
    }, [isUserContextLoaded])

    return (
        <>

            {loaderState ? (
                <AnimatePresence>
                    <motion.div className={styles.loader}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}>
                        <div className={styles.loaderInner}>
                            <BounceLoader color="#3a98cf" />
                        </div>
                    </motion.div>
                </AnimatePresence>
            ) : <>
                <motion.div className='window'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    {children}
                </motion.div>
            </>}

        </>
    );
}

export default Loader;
