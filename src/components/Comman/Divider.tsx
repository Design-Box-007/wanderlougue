'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaAngleDoubleDown } from 'react-icons/fa'

interface DividerProps {
    isIcon?: boolean
}

const Divider: React.FC<DividerProps> = ({ isIcon = false }) => {
    if (isIcon) {
        return (
            <div className="relative flex items-center w-full">
                <motion.div
                    className="h-[2px] bg-black flex-1"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ originX: 1 }}
                />
                <span className="mx-4 flex items-center justify-center text-black text-xl">
                    <FaAngleDoubleDown className="drop-shadow" />
                </span>
                <motion.div
                    className="h-[2px] bg-black flex-1"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    style={{ originX: 0 }}
                />
            </div>
        )
    }
    return (
        <motion.div
            className="h-[2px] w-full bg-black my-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ originX: 0 }}
        />
    )
}

export default Divider
