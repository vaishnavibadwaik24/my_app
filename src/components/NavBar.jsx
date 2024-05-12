import { NavLink } from "react-router-dom";

function NavBar() {
    return (
       <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" activeClassName="active" exact to="/card">Card</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/feature">Feature</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>

            </div>
            </div>
        </div>
        </nav>
        
       </>
    )
}

export default NavBar;
