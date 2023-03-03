import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { reset } from "../features/auth/profileSlice";
import '../css/navbar.css'


export default function Navbar(){
    const authState = useSelector(state=> state.auth)
    const profileState = useSelector(state=>state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () =>{
        dispatch(logout())
        navigate('/registration')
    }

    return(
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand mx-4" href="/">Delivery.Eats</a> 
                
                <div className="navbar-nav" id="navbarNav">
                    <a className="nav-item nav-link active" href="/">Menu </a>
                    <a className="nav-item nav-link" href="/orders">Orders</a>
                    <a className="nav-item nav-link" href="/cart">Cart</a>                        
                </div>
                <div style={{float:"left"}}>
                {
                    authState.user ?  (<div style={{display:"flex"}}>   
                        <p style={{color:'white'}}>{profileState.user.email}</p>
                        <button onClick={handleClick} className="btn btn-primary">Logout</button>
                    </div>):(<div>
                        <Link to="/registration" className=""><button className="btn btn-primary">Register</button></Link>
                        <Link to="/login" className="px-4"><button className="btn btn-primary ">Login</button></Link> 
                    </div>)
                }
                </div>
            </nav> */}
            <div className="header">
                <a  href="/">Delivery.Eats</a> 
                <nav>
                    <ul className="nav__links">
                        <li><a href="/">Menu</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
                
                
                {
                    authState.user ?  (<div className="brotherdiv">   
                        <Link to="/profile"><p style={{color:'white'}}>{profileState.user.email}</p></Link>
                        <button onClick={handleClick} className="btn btn-primary">Logout</button>
                    </div>):(<div className="brotherdiv">
                        <Link to="/registration" className=""><button className="btn btn-primary ">Register</button></Link>
                        <Link to="/login" className="px-4"><button className="btn btn-primary " >Login</button></Link> 
                    </div>)
                }
                
            </div>

        </>
    );
}

