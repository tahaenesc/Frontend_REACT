import { useContext } from 'react'
import { ImageSizeContext } from '../../pages/ProductsPage/ProductsPage'

export function ProductImage ({ productData }) {
  const imageSize = useContext(ImageSizeContext)

  return <img
    src={productData.thumbnailImage}
    width={imageSize}
    height={imageSize}
    alt={productData.name}
  />
}
