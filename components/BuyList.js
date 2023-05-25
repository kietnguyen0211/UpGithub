import { useContext, useState } from "react"
import AppContext from "../AppContext"
import css from "../components/BuyList.css"
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from "react-router-dom"
export default function BuyList(){
    const { card, changeQty, Erase } = useContext(AppContext)
    console.log(card)
   
    return(
       <div>
        {
            card.map((value,key)=>{
                return(
                    <div key={key}>
                        <h1>{value.Watch} </h1>
                        <span><span className="clean" onClick={()=>changeQty(value.id,-1)}>-</span> {value.qty} <span className="add" onClick={()=>changeQty(value.id,1)}>+</span></span>
                        <button onClick={()=>Erase(value.id)}><TiDeleteOutline/></button>
                    </div>
                )
            })
        }
       </div>
    )
} 