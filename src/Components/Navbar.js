import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Delivery.Eats</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Menu </a>
                        <a class="nav-item nav-link" href="#">Orders</a>
                        <a class="nav-item nav-link" href="#">Cart</a>                        
                    </div>
                </div>
                <div className="">
                        <Link to="/registration" className=""><button className="btn btn-primary">Register</button></Link>
                        <Link to="/login" className="px-4"><button className="btn btn-primary ">Login</button></Link>
                </div>
            </nav>
        </>
    );
}