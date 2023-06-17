import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
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
  </Routes>
</div>
  </>
  
  )
}

export default App;
