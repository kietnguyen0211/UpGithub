import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState()
  const [product, setProduct] = useState([])
  const [card, setCard] = useState([])
  const [check,setCheck]=useState(false)


  const BuyNow = (id) => {
    const kq = product.find((value) => value.id == id)
    const index = card.findIndex((item) => item.id == id)
    if (index >= 0) {
      let newList = card
      newList[index]["qty"]++
      setCard(newList)
      localStorage.setItem("cardList",JSON.stringify(newList))
      setCheck(true)
      const interval = setInterval(() => {
      
        setCheck(false)
        clearInterval(interval)
      }, 1000);
    }
    else {
      setCard([...card, { ...kq, qty: 1 }])
      localStorage.setItem("cardList",JSON.stringify([...card,{...kq,qty:1}]))
    }
  }
  
  console.log(check)

  const changeQty = (id, num) => {
    const kq = card.map((item) =>
      (item.id == id && !(num == -1 && item["qty"] == 1))
        ? { ...item, qty: item["qty"] + num }
        : item
    )
    setCard(kq)
    localStorage.setItem("cardList",JSON.stringify(kq))
  }


  const Erase = (id) => {
    const kq = card.filter((item)=>item.id != id)
    setCard(kq)
    localStorage.setItem("cardList",JSON.stringify(kq))
  }
  


  const getData = async () => {
    const url = `https://6468c255e99f0ba0a82c30d4.mockapi.io/products`
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(()=>{
    if(localStorage.getItem("cardList")){
      setCard(JSON.parse(localStorage.getItem("cardList")))
    }
  },[])

  useEffect(() => {
    getData()
  }, [])

  useEffect(()=>{
    getData()
  },[card])

  return (
    <AppContext.Provider value={{Erase, show, count, setShow, product, BuyNow, card, changeQty, check }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppContext