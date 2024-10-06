import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import TableData from "./components/TableData";
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {
 
  return (
    <BrowserRouter>
    <NavBar/>
<Routes>
  <Route path='/' element={<TableData/>}/>
  <Route path='/add' element={<AddProduct/>}/>
  <Route path='/about' element={<TableData/>}/>
</Routes>
    </BrowserRouter>
   
  );
}

export default App;
