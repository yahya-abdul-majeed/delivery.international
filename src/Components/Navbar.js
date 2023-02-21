


export default function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Delivery.Eats</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Menu </a>
                    <a class="nav-item nav-link" href="#">Orders</a>
                    <a class="nav-item nav-link" href="#">Cart</a>
                    </div>
                </div>
            </nav>
        </>
    );
}