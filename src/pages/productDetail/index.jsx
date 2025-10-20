import { data, useParams } from "react-router";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { decrementBasketProductCount, GetSelectedProduct, incrementBasketProductCount , addToBasket } from "../../store/productSlice";
import { Backdrop, CircularProgress } from "@mui/material";

function ProductDetail() {
    let data = undefined;
    let isLoading = false;
    let basketProductCount;
    const dispatch = useDispatch();

    const { id } = useParams();
    if (id) {
        basketProductCount = useSelector(state => state.products.ProductCount);

        useEffect(() => {
            dispatch(GetSelectedProduct(id))
        }, [dispatch])

        isLoading = useSelector(state => state.products.isLoading);

        data = useSelector((state) => state.products.selectedProduct);

        console.log(data)
    }
    else {
        return (
            <h1>Bu sayfaya bir id değer yollanması mecburidir</h1>
        );
    }

    return (
        <>
            <Header />
            {
                isLoading == true ? (<Backdrop
                    sx={(theme) => ({ color: '#38e991ff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}>
                    <CircularProgress color="inherit" /></Backdrop>) :
                    (
                        <div className="product container" style={{ marginTop: "20px" }}>
                            <h3 style={{ color: "darkred", fontWeight: "bold", fontSize: "23px" }}>{data.title}</h3>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img width="500px" height="200px" src={data.image} alt="resim" />
                                <div>
                                    <div>{data.description}</div>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                                        <h2>{data.price}</h2>
                                        <button onClick={() => dispatch(addToBasket({...data , count: basketProductCount }))} style={{ backgroundColor: "darkred", color: "white", cursor: "pointer" , padding: "5px 10px", border: "none" }}>Sepete Ekle</button>
                                    </div>
                                    <div className="basketBtnContainer">
                                        <button onClick={() => dispatch(decrementBasketProductCount())} type="button">-</button>
                                        <span>{basketProductCount}</span>
                                        <button onClick={() => dispatch(incrementBasketProductCount())} type="button">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default ProductDetail;