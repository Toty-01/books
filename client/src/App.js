import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/hotels" exact element={<List/>}/>
        <Route path="/hotels/:id" exact element={<Hotel/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;