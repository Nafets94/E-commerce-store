import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
}

export default function Catalog({products}: Props) {
    return (
        <>
            <ul>
                {products && products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </>
    )
}