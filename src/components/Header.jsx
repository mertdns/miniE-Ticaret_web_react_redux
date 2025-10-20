import { Link } from "react-router";
import { FaShoppingBasket } from "react-icons/fa";
import { Badge } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from "react";
import BasketProductList from "./BasketProductList";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsCount } from "../store/productSlice";

function Header() {
    const [drawerState, setDrawerState] = useState(false);
    const dispatch = useDispatch();
    
    const basket = useSelector(state => state.products.basket);

    useEffect(() => {
        dispatch(getAllProductsCount());
    },[dispatch , basket])

    const totalProductsCount = useSelector(state => state.products.basketProductsCount);

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
                    {
                        totalProductsCount > 0 ? (
                            <Badge style={{ backgroundColor: "transparent", cursor: "pointer" }} badgeContent={totalProductsCount} color="primary">
                                <Link onClick={() => setDrawerState(true)} className="menuItem" > <FaShoppingBasket /> </Link>
                            </Badge>
                        ) : ""
                    }
                </nav>
            </div>

            {
                totalProductsCount > 0 ? (
                    <Drawer open={drawerState} anchor="right" onClose={() => setDrawerState(false)}>
                        <BasketProductList />
                    </Drawer>
                ) : ""
            }


        </header>
    )
}

export default Header;