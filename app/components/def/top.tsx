'use client';
import { JSX, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
export default function TopTop(): JSX.Element | boolean {
    const [showButton, setShowButton] = useState<boolean>(false);
    useEffect(() => {
        const listenerWindow = () => {
            window.scrollY > 0 ? setShowButton(true) : setShowButton(false);
        }
        window.addEventListener("scroll", listenerWindow);
        return () => window.removeEventListener("scroll", listenerWindow);
    })
    function toTopWindow() { window.scrollTo(0, 0) }
    return (
        showButton && <motion.button 
        initial={{
            opacity: 0,
            y: "-50px",
            scale: 1.5
        }}
        animate={{
            opacity: 1,
            y: 0,
            scale: 1
        }}
        transition={{
            duration: .5,
            ease: "easeOut"
        }}
        className="toTop" 
        onClick={toTopWindow} />
    )
}