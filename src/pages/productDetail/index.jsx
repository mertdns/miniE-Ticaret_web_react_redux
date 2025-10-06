import { data, useParams } from "react-router";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { GetSelectedProduct } from "../../store/productSlice";

function ProductDetail() {
    let data = undefined;

    const { id } = useParams();
    if (id) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(GetSelectedProduct(id))
        }, [dispatch])

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

            <div className="product container" style={{ marginTop: "20px" }}>
                <h3 style={{ color: "darkred", fontWeight: "bold", fontSize: "23px" }}>{data.title}</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img width="500px" height="200px" src={data.image} alt="resim" />
                    <div>
                        <div>{data.description}</div>
                        <div style={{ display: "flex",justifyContent: "space-between", marginTop: "20px" }}>
                            <h2>{data.price}</h2>
                            <button style={{backgroundColor: "lightgreen", color: "white" , padding: "5px 10px", border: "none"}}>Sepete Ekle</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail;