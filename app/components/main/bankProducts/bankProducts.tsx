import { JSX } from "react";
import { dataBankProduct } from "./bankProductsData";
import Link from "next/link";
export default function BankProducts(): JSX.Element {
    return (
        <>
        <section id="cards">
            <div className="bank-products">
                <h3>Начинайтие экономить прямо сейчас!</h3>
                <div className="bank-products-block">
                    {
                        dataBankProduct.map((bankProduct, index) => {
                            return (
                                <Link 
                                key={index} 
                                href={bankProduct.url} 
                                className="bank-product-card"
                                target="_blank">
                                    
                                        <div 
                                        style={{
                                        backgroundImage: `url(${bankProduct.image})`
                                        }}
                                        className="image-bank-product"></div>
                                        <h5>{bankProduct.title}</h5>
                                        <p>{bankProduct.description}</p>
                                        <div className="meta-number">
                                            <span>Перейти</span>
                                            {++index}
                                            </div>
                                    
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}