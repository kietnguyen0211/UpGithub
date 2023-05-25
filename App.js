import css from "./App.css"
import { AppProvider } from "./AppContext";
import Movie from "./components/Movie"
import Product from "./components/Product";
import { Routes, Route, Link } from "react-router-dom"
import BuyList from "./components/BuyList";

function App(){
  return(
    <div>
      <AppProvider>
        <Link to={`buylist`}>BuyList</Link>
        
        <Routes>
          <Route path="/buylist" element={<BuyList/>}></Route>
          <Route path="/" element={<Product/>}></Route>
        </Routes>
      </AppProvider>
    </div>
  )
}
export default App