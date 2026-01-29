'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
type IDataType = {
    title: string,
    text: string
};
const data: IDataType[] = [
    {
        title: "Сравнивайте",
        text: "На одной странице видите все ключевые условия от разных банков"
    },
    {
        title: "Оформляете",
        text: "Переходите по ссылке на официальную страницу банка и заполняете заявку онлайн"
    },
    {
        title: "Получаете",
        text: "Карту доставят курьером или в отделение. А вы начнете экономить и копить бонусы с первых покупок"
    }
];
export default function SimpleCircuit(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .6});
    return (
        <>
            <div className="simple-circuit-block">
                <h4>Как это работает</h4>
                <div className="simple-circuit-cards" ref={refParent}>
                    {
                        data.map((circuit, index) => {
                            return (
                                <motion.div 
                                initial={{
                                    opacity: 0,
                                    scale: .8
                                }}
                                animate={viewChild ? {
                                    opacity: 1,
                                    scale: 1
                                } : {}}
                                transition={{
                                    duration: .5,
                                    delay: index * .1,
                                    ease: "easeOut"
                                }}
                                key={index}
                                className={
                                    `circuit-card circuit-card${index}`
                                }>
                                    <div className={`circuit-img circuit-img${index}`}></div>
                                    <div className="circuit-content"> 
                                        <h5>{circuit.title}</h5>
                                        <div className="circuit-pointer"></div>
                                        <span>{circuit.text}</span>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}