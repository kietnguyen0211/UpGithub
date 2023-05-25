import { useContext } from "react"
import { AppContext } from "../AppContext"
import { Link } from "react-router-dom"
export default function Movie() {
    const { show, count } = useContext(AppContext)
    console.log(count)
    return (
        <div>
            <h1>Em la Movie</h1>
        </div>
    )
}
