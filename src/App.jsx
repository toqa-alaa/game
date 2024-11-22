import { BrowserRouter, Routes,Route } from "react-router-dom"
import Read from "./pages/Read"
import Watch from "./pages/Watch"
import Play from "./pages/Play"
import MarketPlace from "./pages/MarketPlace"
import Privacy from "./pages/Privacy"
import RoadMap from "./pages/RoadMap"
import Team from "./pages/Team"
import HomePage from "./pages/HomePage";
import "./index.css"




function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
  <Route  path="Read" element={<Read/>}/>
  <Route  path="Watch" element={<Watch/>}/>
  <Route  path="Play" element={<Play/>}/>

  <Route  path="MarketPlace" element={<MarketPlace/>}/>

  <Route  path="Privacy" element={<Privacy/>}/>
  <Route  path="Team" element={<Team/>}/>
  <Route  path="RoadMap" element={<RoadMap/>}/>
</Routes>

    </BrowserRouter>
 
  )
}

export default App
