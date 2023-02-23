import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Registration from './Pages/Registration'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="registration" element={<Registration/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
