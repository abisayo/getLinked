"use client"

import React from 'react'
import { Footer, Navbar } from "@/components/index"
import { motion, AnimatePresence } from "framer-motion"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default layout