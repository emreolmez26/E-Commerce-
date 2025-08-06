import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlices';
import Product from './Product'; // Importing the Product component



function ProductList() {

    const dispatch = useDispatch(); // Redux store'a erişim için useDispatch hook'unu kullanıyoruz
    const {products} = useSelector((store) => store.product); // Redux store'dan ürünleri alıyoruz
  

    useEffect(() => { // Bileşen yüklendiğinde çalışacak kod
        // Burada API çağrısı yapabilir veya gerekli işlemleri gerçekleştirebilirsiniz
        dispatch(getAllProducts())

    }, [])

  return (
    <div className='flex-row' style={{flexWrap: 'wrap', gap: '20px', marginTop: '20px'}}>
      {products && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList