import React from 'react';
import styles from "./Modal.module.css"
import { motion, AnimatePresence } from "framer-motion"


const Modal = (props) => {

    const windowW = window.innerWidth

    const handleClick = React.useCallback((e) => {
        try {
            if (!props.active) {
                return;
            }
        } catch (err) {
           return console.log("error")
        }
        if (!props.static && e.target.classList.value === styles.modalInner) {
            props.onClose();
        }
    }, [props.active, props.static, props.onClose]);

    React.useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    return (
        <>
            <AnimatePresence>
                {props.active && (
                    <motion.div className={styles.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}>
                        <div className={styles.modalInner}>
                            <motion.div className={styles.window}
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                style={{
                                    "width": windowW <= 768 ? "96%" : props.width
                                }}
                            >
                                <div className={styles.windowInner}>
                                    <p>привет</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}

export default Modal;
