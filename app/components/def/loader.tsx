'use client';
import { JSX, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
export default function Loader(): JSX.Element | false {
    const controls = useAnimation();
    const [loader, setLoader] = useState<boolean>(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoader(prev=> !prev);
        }, 1600);
        return () => clearTimeout(timeout);
    }, []);
    useEffect(() => {
        const sequence = async () => {
            await controls.start({
                height: "100%",
                transition: { duration: 0.5 }
            });
            await controls.start({
                opacity: 0,
                transition: { duration: 0.3 }
            });
        };
        sequence();
    }, [controls]);
    return (
        loader && <div className="loader">
            <motion.div 
            initial={{
                width: "50%"
            }}
            animate={{
                width: 0
            }}
            transition={{
                duration: 1,
                delay: .7
            }}
            className="load-panel load-panel1" />
            <motion.div
            initial={{
                width: "50%"
            }}
            animate={{
                width: 0
            }} 
            transition={{
                duration: 1,
                delay: .7
            }}
            className="load-panel load-panel2" />
            <motion.div
            animate={controls}
            initial={{
                height: 0,
                opacity: 1
            }}
            className="loader-separator"
            />
        </div>
    )
}