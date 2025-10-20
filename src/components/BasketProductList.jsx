import { useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";


export default function BasketProductList() {

    const products = useSelector(state => state.products.basket);

    return (
        <div style={{ padding: "10px", maxWidth: "500px" }}>
            {
                products && products.map(product => (
                    <div className="basketProductContent">
                        <img src={product.image} alt="resim" />
                        <div>
                            <div className="title">{product.title}</div>
                            <div>
                                <div><b>{product.price}</b></div>
                                <div>Adet: {product.count}</div>
                            </div>
                        </div>
                        <button type="button"> <MdDelete /> </button>
                    </div>
                ))
            }
        </div>
    )
}