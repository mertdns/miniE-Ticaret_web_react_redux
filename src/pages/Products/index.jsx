import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedProduct, GetAllProducts } from "../../store/productSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Backdrop, CircularProgress } from "@mui/material";

function Products() {

    const naviage = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllProducts());
        dispatch(clearSelectedProduct());

    }, [dispatch]);
    const data = useSelector(state => state.products.allProducts);
    let isLoading = useSelector(state => state.products.isLoading);

    return (
        <>
            <Header />
            {
                isLoading ? (
                    <Backdrop
                        sx={(theme) => ({ color: '#38e991ff', zIndex: theme.zIndex.drawer + 1 })}
                        open={open}>
                        <CircularProgress color="inherit" /></Backdrop>
                          ) :
                    (
                        <div className="wrapper container">
                            {
                                data && data.map(data => (
                                    <div key={data.id} className="card">
                                        <img width="250px" height="200px" src={data.image} alt="resim" />
                                        <div className="title">{data.title}</div>
                                        <p className="description">{data.description}</p>
                                        <div className="info">
                                            <div className="price">{data.price}₺</div>
                                            <button onClick={() => {
                                                naviage("/productdetail/" + data.id)
                                            }} className="detailBtn">
                                                Detaya Git
                                            </button>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    )
            }
        </>
    )
}

export default Products;