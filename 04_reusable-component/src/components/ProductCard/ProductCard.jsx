import "./ProductCard.css";

import { formatNumber } from "../../utility/utility.service";

export function ProductCard({ name, price }) {
    return (
        <div>
            <p>
                <span>Product Name: </span>
                <span className="product-value">{ name }</span>
            </p>
            <p>
                <span>Product Price: </span> 
                <span className="product-value">{ formatNumber(price, 'N/A') }</span>
            </p>
        </div>
    )
}