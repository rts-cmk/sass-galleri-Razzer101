import { Route, Routes } from "react-router"
import Explore from "./pages/Explore"
import Lifestyle from "./pages/Lifestyle"
import Food from "./pages/Food"
import Home from "./pages/Home"
import Travel from "./pages/Travel"
import Error from "./pages/Error"
import Searchbar from "./components/Searchbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Searchbar/>
      <Routes>
        <Route index element={ <Explore/> }/>
        <Route path="/lifestyle" element={<Lifestyle/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/travel" element={<Travel/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
