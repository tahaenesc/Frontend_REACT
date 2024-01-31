import { ProductImage } from "../ProductImage/ProductImage"

import styles from './ProductCard.module.css'

export function ProductCard ({ productData }) {
  return <div className={styles['product-card']}>
    <ProductImage productData={productData} />
    <p>
      <b>{productData.name}</b>
      {': ' + productData.description}
    </p>
  </div>
}
