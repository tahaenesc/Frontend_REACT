import { ProductCard } from "../ProductCard/ProductCard"

import styles from './ProductList.module.css'

export function ProductList ({ products }) {
  return <ul className={styles['product-list']}>
    {
      products.map(
        product => <li key={product.id}>
          <ProductCard productData={product} />
        </li>
      )
    }
  </ul>
}
