import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Registration from './Pages/Registration'
import DishDetail from "./Pages/DishDetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from "./Pages/Main";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Main/>}></Route>
          <Route path="registration" element={<Registration/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="item/:id" element={<DishDetail/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
