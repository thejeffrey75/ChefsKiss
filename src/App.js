import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Burger from "./pages/recipespages/Burger"
import ChickenSandwich from "./pages/recipespages/ChickenSandwich"
import GuacSalad from "./pages/recipespages/GuacSalad"
import Pizza from "./pages/recipespages/Pizza"
import Salad from "./pages/recipespages/Salad"
import Salmon from "./pages/recipespages/Salmon"
import Wonton from "./pages/recipespages/Wonton"
import Meatballs from "./pages/recipespages/Meatballs"


import "./styles.css";
import "./App.css"
import {Route, Routes} from "react-router-dom"





function App() {
  return (
    <>
<Navbar/>
<div className="container">
<Routes>
  <Route path= "/" element={<Home/>}  />
  <Route path= "/recipes" element={<Recipes/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/Burger" element={<Burger/>} />

    <Route path="/ChickenSandwich" element={<ChickenSandwich/>} />
    <Route path="/GuacSalad" element={<GuacSalad/>} />
    <Route path="/Meatballs" element={<Meatballs/>} />
    <Route path="/Pizza" element={<Pizza/>} />
    <Route path="/Salad" element={<Salad/>} />
    <Route path="/Salmon" element={<Salmon/>} />
    <Route path="/Wonton" element={<Wonton/>} />
  </Routes>
</div>
  </>
  
  )
}

export default App;
