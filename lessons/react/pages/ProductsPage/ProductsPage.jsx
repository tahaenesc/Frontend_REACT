import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { ProductList } from '../../components/ProductList/ProductList'

export const ImageSizeContext = createContext()

export function ProductsPage () {
  const [products, setProducts] = useState([])
  const [isLarge, setIsLarge] = useState(false)

  const imageSize = isLarge ? 150 : 100

  useEffect(() => {
    async function fetchData() {
      const response = await axios('https://dummyapi.online/api/products')
      const data = response.data

      setProducts(data)
    }

    fetchData()
  }, [])

  const handleCheckBoxTick = (event) => {
    setIsLarge(event.target.checked)
  }

  return <ImageSizeContext.Provider value={imageSize}>
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={handleCheckBoxTick}
        />
        Use large images
      </label>
      <hr />
      <h1>Products Sayfası</h1>
      <ProductList products={products} imageSize={imageSize} />
    </>
  </ImageSizeContext.Provider>
}
