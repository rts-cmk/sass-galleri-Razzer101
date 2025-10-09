import { Route, Routes } from "react-router"
import Explore from "./pages/Explore.jsx"
import Lifestyle from "./pages/Lifestyle.jsx"
import Food from "./pages/Food.jsx"
import Home from "./pages/Home.jsx"
import Travel from "./pages/Travel.jsx"
import Error from "./pages/Error.jsx"

function App() {

  return (
    <Routes>
      <Route index element={ <Explore/> }/>
      <Route path="/lifestyle" element={<Lifestyle/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/travel" element={<Travel/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default App
