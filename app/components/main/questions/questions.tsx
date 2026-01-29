'use client';
import { JSX, useState } from "react";
import { motion } from "framer-motion";
interface IDataQuestions {
    question: string;
    answer: string;
}

const questionsData: IDataQuestions[] = [
    {
        question: "Это бесплатно?",
        answer: "Да, наш сервис полностью бесплатен для вас."
    },
    {
        question: "Безопасно ли переходить по вашим ссылкам?",
        answer: "Абсолютно. Все ссылки ведут на официальные сайты банков."
    },
    {
        question: "Что, если у меня плохая кредитная история?",
        answer: "У нас есть предложения с очень высоким шансом одобрения."
    }
];

export default function Questions(): JSX.Element {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    function toggleAnswer(index: number) {
        setOpenIndex(prev => (prev === index ? null : index));
    }
    return (
        <section id="faq">
            <div className="questions-block">
                <div className="questions">
                    {questionsData.map((item, index) => (
                        <div className="qs-bl" key={index}>
                            <div className="question-card">
                                <p>{item.question}</p>
                                {openIndex === index && (
                                    <div className="answer-card-el">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="pointer-qs"
                            >
                                <motion.span
                                initial={{rotate: 0, scale: 1}}
                                animate={openIndex === index ? {rotate: "180deg", scale: 1.5} : {rotate: 0, scale: 1}}
                                transition={{
                                    duration: .3
                                }}
                                >↑</motion.span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
