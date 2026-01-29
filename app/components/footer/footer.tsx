'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function Footer(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .9});
    return (
        <div className="footer-block">
            <div className="footer-image" ref={refParent}>
                <motion.div 
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
                className="finish-block">
                    <h5>Не откладывайте свою выгоду</h5>
                    <span>Каждая покупка по старой карте — это упущенные бонусы и кэшбэк. Найдите свою идеальную карту сегодня и заставьте деньги работать на вас!</span>
                    <div className="logotype-finish">
                        ProfiCard
                    </div>
                </motion.div>
            </div>
        </div>
    )
}