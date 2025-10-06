import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedProduct, GetAllProducts } from "../../store/productSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function Products() {

    const naviage = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllProducts());
        dispatch(clearSelectedProduct());

    }, [dispatch]);
    const data = useSelector(state => state.products.allProducts);


    return (
        <>
            <Header />
            <div className="wrapper container">
                {
                    data && data.map(data => {
                        return (

                            <div key={data.id} className="card">
                                <img width="250px" height="200px" src={data.image} alt="resim" />
                                <div className="title">{data.title}</div>
                                <p className="description">{data.description}</p>
                                <div className="info">
                                    <div className="price">{data.price}₺</div>
                                    <button onClick={() => {
                                        naviage("/productdetail/"+data.id)
                                    }} className="detailBtn">
                                        Detaya Git
                                    </button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>



        </>
    )
}

export default Products;