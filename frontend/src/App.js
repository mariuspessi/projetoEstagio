import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import FoRM from './tratamentoETE';
import Form from './tratEst';
import FORm from "./phLagoa";
import FORM from "./TratPoco";
import Footer from './components/footer';
import {toast, ToastContainer} from 'react-toastify';
import Home from './components/home';
import Navbar from './components/navBar';
import global from './styles/global';
//import Rota from "./components/rotas";
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
    };
   
  return (    

    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lagoa" element={<FORm />} />
          <Route path="/ete" element={<FoRM />} />
          <Route path="/eta" element={<Form />} />
          <Route path="/poco" element={<FORM />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
           
 
};

export default App;










