
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Insert from "../pages/Insert"
import Display from "../pages/Display"
import Update from "../pages/Update"
import EmpEdit from "../pages/Detailsedit"
import Layout from "./Layout"
import Search from "../pages/Search"





function App() {
 

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>} >
         <Route index element={<Home/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/insert" element={<Insert/>} />
         <Route path="/display" element={<Display/>} />
         <Route path="update" element={<Update/>}/>
         <Route path="empedit/:id" element={<EmpEdit/>}/>
         <Route path="/search" element={<Search />} />
       </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
