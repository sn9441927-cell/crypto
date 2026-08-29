"use client";
import React from "react";
import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) => {
    return (
        <motion.div
            initial={{
                y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
                x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                x: 0,
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, delayChildren = 0 }: { children: React.ReactNode; delayChildren?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.2,
                        delayChildren: delayChildren,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export const Floating = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
};
