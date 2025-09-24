import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import Register from "./pages/Register";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const axiosGet = async () => {
    try {
      const { data } = await axios.get("/users/profile");
      setUser(data);
    } catch (error) {
      setUser(null); // garante limpar caso o token seja inválido
    }
  };

  axiosGet();
}, []);

  return (
  <BrowserRouter>
   <Header user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />    
        <Route path="/register" element={<Register setUser={setUser} />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
