import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>

            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="#">Inicio</a>
                </li>

                <li className="navbar-item">
                    <a href="#">Productos</a>
                </li>

                <li className="navbar-item">
                    <a href="#">Contacto</a>
                </li>

            </ul>

            <CartWidget />

        </nav>
    )
}

export default NavBar