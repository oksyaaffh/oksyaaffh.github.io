import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!false);


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i className="fab fa-skyatlas"/> POXY
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times-circle' :'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-list">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className="nav-list">
                    <Link to="/PokemonList" className="nav-links" onClick={closeMobileMenu}>
                        Pokemon List
                    </Link>
                    </li>
                    <li className="nav-list">
                    <Link to="/PokemonDetail" className="nav-links" onClick={closeMobileMenu}>
                        Pokemon Detail
                    </Link>
                    </li>
                    <li className="nav-list">
                    <Link to="/MyPokemonList" className="nav-links" onClick={closeMobileMenu}>
                        My Pokemon List
                    </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
