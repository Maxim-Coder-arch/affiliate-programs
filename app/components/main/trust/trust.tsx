import { JSX } from "react";
type IDataType = {
    title: string,
    text: string
}
const data: IDataType[] = [
    {
        title: "Актуально",
        text: "Мы ежедневно обновляем информацию. Вы видите только рабочие предложения."
    },
    {
        title: "Честно",
        text: "Прямо указываем условия, подводные камни и комиссии. Наша цель — чтобы вы были довольны."
    },
    {
        title: "Просто",
        text: "Удобные фильтры (по кэшбэку, банку, типу карты). Нашли → сравнили → оформили."
    },
    {
        title: "Выгодно",
        text: "Мы сотрудничаем с банками напрямую. Часто по нашим ссылкам доступны эксклюзивные условия или повышенные бонусы при оформлении."
    }
];
export default function Trust(): JSX.Element {
    return (
        <section id="trust">
            <div className="trust-block">
                <h4>Почему нам можно доверять</h4>
                <div className="trust-cards">
                    {
                        data.map((trustCard, index) => {
                            return (
                                <div 
                                key={index}
                                className="trust-card">
                                    <div className="trust-title">
                                        <h5>{trustCard.title}</h5>
                                        <span>{trustCard.text}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}