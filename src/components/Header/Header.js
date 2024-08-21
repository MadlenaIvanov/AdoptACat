import { useContext } from "react";
import { Link } from "react-router-dom"

// import { AuthContext } from "../../contexts/AuthContext";
import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { user } = useAuthContext()

    let guestNavigation = (
        <div id="guest" className="guest">

            {/* <Link to="/forAdoption">For Adoption</Link> */}

            <div className="dropdown">
                <Link className="dropbtn" to="/information">Information </Link>
                <div className="dropdown-content">
                    <Link to="/picking">How to choose a kitty</Link>
                    <Link to="/caring">Taking care of your cat</Link>
                </div>
            </div>  

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user" className="user">
            <span>Welcome, {user.email}</span>
            <Link to="/all-pets">Adopt a kitty</Link>                                    
            {/* <Link to="/forAdoption">For Adoption</Link> */}

            <div className="dropdown">
                        <Link className="dropbtn" to="/information">Information </Link>
                        <div className="dropdown-content">
                            <Link to="/picking">How to choose a kitty</Link>
                            <Link to="/caring">Taking care of your cat</Link>
                        </div>
                     </div>  


            <Link to="/my-pets" >My Pets</Link>
            <Link to="/create" >Add Pet</Link>
            <Link to="/logout" >Logout</Link>
        </div>
    );


    return(
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                <Link to="/dashboard">Dashboard</Link>

                {user.email
                    ? userNavigation 
                    : guestNavigation}

                </section>
            </nav>
        </header>
    )
}

export default Header