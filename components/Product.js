import AppContext from "../AppContext";
import css from "./Product.css"
import p from "./Sale.jpg"
import { FiShoppingCart } from 'react-icons/fi';
import { useContext, useState } from "react";
import { BsCheck2All } from 'react-icons/bs';
export default function Product() {
    
    const { product, BuyNow, check } = useContext(AppContext)

    return (
        <div className="products">
            <div className={`${check ? "active" : "meo"}`} >
                <span>Completed <BsCheck2All/></span>
            </div>
           
            {
                product.map((value, key) => {
                    return (
                        
                        <div key={key} className="oneProduct">
                            <div className="innerProduct">
                                <img src={p} style={{ width: "315px", height: "265px" }} ></img>
                                <div className="content">
                                    <h1>{value.Watch} </h1>
                                    <span> {value.Number} </span>
                                    <span> {value.National} </span>
                                    <button className="btnShop" onClick={()=>{
                                        BuyNow(value.id)
                                        }}>
                                    <FiShoppingCart /></button>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}