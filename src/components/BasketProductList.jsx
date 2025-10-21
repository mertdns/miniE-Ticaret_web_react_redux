import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { getTotalPrice, removeToBasketById } from "../store/productSlice";


export default function BasketProductList() {

    const products = useSelector(state => state.products.basket);
    const totalPrice = useSelector(state => state.products.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [dispatch , products])

    return (
        <div className="basketProductContainer">
            <div>
                {
                    products && products.map(product => (
                        <div key={product.id} className="basketProductContent">
                            <img src={product.image} alt="resim" />
                            <div>
                                <div className="title">{product.title}</div>
                                <div>
                                    <div><b>{product.price}</b></div>
                                    <div>Adet: {product.count}</div>
                                </div>
                            </div>
                            <button onClick={() => dispatch(removeToBasketById(product.id))} type="button"> <MdDelete /> </button>
                        </div>
                    ))
                }
            </div>
            <div className="basketButtonContainer">
                <div>Toplam Fiyat: {totalPrice}</div>
                <Button variant="contained" color="success">
                    Sepeti Onayla
                </Button>
            </div>
        </div>
    )
}