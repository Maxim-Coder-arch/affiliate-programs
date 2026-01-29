'use client';
import Link from "next/link";
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function IntroDuction(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {amount: .6, once: true});
    return (
        <div className="introduction-block" ref={refParent}>
            <div className="introduction-content">
                <div className="art">
                    <motion.h3
                    initial={{
                        opacity: 0,
                        y: "100px"
                    }}
                    animate={viewChild ? {
                        opacity: 1,
                        y: 0
                    } : {}}
                    transition={{
                        duration: .5,
                        ease: "easeOut"
                    }}
                    >Устали от сложных тарифов и <span>скрытых комиссий?</span></motion.h3>
                </div>
                <motion.span
                initial={{
                    opacity: 0,
                    y: "100px"
                }}
                animate={viewChild ? {
                    opacity: 1,
                    y: 0
                } : {}}
                transition={{
                    duration: .5,
                    ease: "easeOut",
                    delay: .2
                }}
                >Мы создали этот ресурс, чтобы вы перестали переплачивать и начали зарабатывать на своих повседневных тратах.</motion.span>
            </div>
            <motion.div 
            initial={{
                scale: .8
            }}
            animate={viewChild ? {
                scale: 1
            } : {}}
            transition={{
                duration: .5,
                delay: .4,
                ease: "easeOut",
            }}
            className="introduction-image">
                <Link href="#cards">К банковским продуктам</Link>
            </motion.div>
        </div>
    )
}