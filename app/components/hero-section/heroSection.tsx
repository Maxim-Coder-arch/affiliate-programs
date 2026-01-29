'use client';
import { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function HeroSection(): JSX.Element {
    const [state, setState] = useState<boolean>(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setState(true);
        }, 1200);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <section id="hero-section">
            <div className="hero-section">
                <div className="left-hero-panel">
                    <div className="company-block">
                        <motion.span
                        initial={{
                            opacity: 0,
                            y: "15px"
                        }}
                        animate={state ? {
                            opacity: 1,
                            y: 0
                        } : {}}
                        transition={{
                            duration: .5,
                            delay: 1.2,
                            ease: "easeOut"
                        }}
                        >ProfiCard</motion.span>
                    </div>
                    <div className="pointer">
                        <motion.div 
                        initial={{
                            opacity: 0,
                            height: 0
                        }}
                        animate={state ? {
                            opacity: 1,
                            height: "40%"
                        } : {}}
                        transition={{
                            duration: .5,
                            delay: 1,
                            ease: "easeOut"
                        }}
                        className="pointer-inf" />
                    </div>
                </div>
                <div className="banner-block">
                    <motion.h1
                    initial={{
                            opacity: 0,
                            y: "15px"
                        }}
                        animate={state ? {
                            opacity: 1,
                            y: 0
                        } : {}}
                        transition={{
                            duration: .5,
                            ease: "easeOut"
                        }}
                    >Финансы, которые работают на вас</motion.h1>
                    <div className="banner-c">
                        <motion.h2
                        initial={{
                            opacity: 0,
                            y: "15px"
                        }}
                        animate={state ? {
                            opacity: 1,
                            y: 0
                        } : {}}
                        transition={{
                            duration: .5,
                            delay: .2,
                            ease: "easeOut"
                        }}
                        >Сравнение и актуальные предложения от топ-банков. Оформляем онлайн. Кэшбэк до 30%, мили, бесплатный обслуживание и сотни других выгод</motion.h2>
                        <motion.a
                        href="#cards"
                        initial={{
                            opacity: 0,
                            y: "15px"
                        }}
                        animate={state ? {
                            opacity: 1,
                            y: 0
                        } : {}}
                        transition={{
                            duration: .5,
                            delay: .4,
                            ease: "easeOut"
                        }}
                        >Сделать карту</motion.a>
                    </div>
                </div>
            </div>
        </section>
    )
}