import './App.css'
import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <div>
          <Routes>
              <Route path='/' element={<Header />} />
              {/*<Route path='/*' element={<UnderConstruction />} />*/}
          </Routes>
      </div>

  )
}

export default App
