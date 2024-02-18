import React from 'react';
import { motion } from "framer-motion"


const AnimateBlock = ({ children }) => {
    return (
        <>
            <motion.div className="animateBlock"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}>
                    {children}
            </motion.div>
        </>
    );
}

export default AnimateBlock;
