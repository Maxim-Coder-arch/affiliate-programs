'use client';
import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
interface IType {
    title: string;
    text: string;
}
interface ICategory {
    title: string;
    items: IType[];
}
const categories: ICategory[] = [
    {
        title: "Для жизни",
        items: [
            { title: "Дебетовые карты", text: "с максимальным кэшбэком на АЗС, в супермаркетах, кафе и онлайн-сервисах." },
            { title: "Виртуальные карты", text: "для безопасных покупок в интернете и подписок" },
            { title: "Кредитные карты", text: "с длинным грейс-периодом — чтобы ваши деньги работали дольше." }
        ]
    },
    {
        title: "Для бизнеса",
        items: [
            { title: "Бизнес-карты", text: "для ИП и ООО с выгодным обналичиванием, разделением личных и рабочих трат." },
            { title: "Эквайринг и инструменты", text: "для автоматизации финансов вашей компании." },
            { title: "Бизнес-кредиты и кредитные линии", text: "для пополнения оборотных средств, закупки оборудования или запуска новых проектов. Быстрое решение для вашего роста." }
        ]
    },
    {
        title: "Просто выгодно",
        items: [
            { title: "Карты с милями", text: "для путешествий." },
            { title: "Продукты с бонусами", text: "за рекомендацию, например, приведи друга." },
            { title: "Специальные предложения", text: "с повышенным кэшбэком или бесплатным обслуживанием." }
        ]
    }
];
export default function ValueStructure(): JSX.Element {
    const refParent = useRef(null);
    const viewChild = useInView(refParent, {once: true, amount: .2});
    return (
        <>
        <section id="our-offers">
            <h3 className="vl-st">Что мы предлагаем</h3>
            <div className="value-struct" ref={refParent}>
                {categories.map((category, categoryIndex) => (
                    <div 
                    className={`${categoryIndex === 0 ? 'live' : categoryIndex === 1 ? 'business' : 'benefit'} bl-st`} key={categoryIndex}>
                        <span>{category.title}</span>
                        <div className="vl-st-card-items">
                            {category.items.map((item, index) => (
                                <motion.div 
                                initial={{
                                    opacity: 0,
                                    y: "50px"
                                }}
                                animate={viewChild ? {
                                    opacity: 1,
                                    y: 0
                                } : {}}
                                transition={{
                                    duration: .5,
                                    delay: index * .2,
                                    ease: "easeOut"
                                }}
                                className="card-struct" key={index}>
                                    <h5>{item.title}</h5>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}