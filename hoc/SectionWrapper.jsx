"use client"

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) => 
function HOC() {
    return(
        <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        >
        <Component />
        </motion.div>
    )
}

export default SectionWrapper;