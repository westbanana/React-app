import react from "react";
import classes from "./MainStyles.css";
import products from "./Products/Products.js";


const ProductContainer = () => {
 return   
    <div className="">
        {products.map((product) => (
            <div className="product_container">
                <img src={product.image} className="product_image"/>
                <p className="product_name">{product.name}</p>
                <p className="product_price">{`${product.price}$`}</p>
            </div>
        ))}
    </div>;
}
 export default ProductContainer;
