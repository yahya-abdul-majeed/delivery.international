import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { reset } from "../features/auth/profileSlice";


export default function Navbar(){
    const authState = useSelector(state=> state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () =>{
        dispatch(logout())
        navigate('/registration')
    }

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Delivery.Eats</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Menu </a>
                        <a class="nav-item nav-link" href="/orders">Orders</a>
                        <a class="nav-item nav-link" href="/cart">Cart</a>                        
                    </div>
                </div>
                {
                    authState.user ?  (<div>   
                        <button onClick={handleClick} className="btn btn-primary">Logout</button>
                    </div>):(<div>
                        <Link to="/registration" className=""><button className="btn btn-primary">Register</button></Link>
                        <Link to="/login" className="px-4"><button className="btn btn-primary ">Login</button></Link> 
                    </div>)
                }
            </nav>
        </>
    );
}

