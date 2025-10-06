import { Link } from "react-router";

function Header() {
    return (
        <header className="header">
            <div className="menuContainer">
                <div className="logo">
                    <a href="#">LOGO</a>
                </div>
                <nav className="menu">
                    <Link className="menuItem" to="/about">Hakkımızda</Link>
                    <Link className="menuItem" to="/contact">İletişim</Link>
                    <Link className="menuItem" to="/products">Ürünler</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;