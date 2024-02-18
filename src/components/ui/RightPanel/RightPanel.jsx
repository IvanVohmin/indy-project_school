import React from 'react';
import styles from './Panel.module.css'
import { motion, AnimatePresence } from "framer-motion"

const RightPanel = (props) => {

    const [width, setWidth] = React.useState(props.width || 450)
    const [windowW, setWindowW] = React.useState(window.innerWidth)

    const mobileW = props.mobileTransform || 767

    const handleResize = () => {
        setWindowW(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const handleClose = () => {
        props.onClose()
    }

    return (
        <AnimatePresence>
            {props.active && (
                <motion.div className={styles.panel}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className={styles.panelInner}>
                        <motion.div className={styles.window}
                            initial={{ opacity: 0, x: width + 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: width - 100 }}
                            transition={{ duration: 0.2 }}
                            style={{width: windowW > mobileW ? `${width}px` : "100%"}}
                        >
                            <div className={styles.windowInner}>
                                <button className={styles.panelClose} onClick={handleClose}><i className="fa-light fa-xmark"></i></button>
                                {props.content}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default RightPanel;
