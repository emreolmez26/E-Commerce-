import React from 'react'
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import { useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { setSelectedProduct } from '../redux/slices/productSlices';
import '../css/ProductDetails.css'; // Assuming you have a CSS file for styling
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from 'react';
import { addToBasket } from '../redux/slices/basketSlices';



function ProductDetails() {

    const { id } = useParams(); // UseParamsı kullanarak URL'den id'yi alıyoruz object destructing
    const { products, selectedProduct } = useSelector((store)=>store.product); // useSelector ile Redux store'dan product bilgilerini alıyoruz

    const {title, price, description, image } = selectedProduct;

    const [count, setCount] = useState(0);
 
    const dispatch = useDispatch(); // Dispatch fonksiyonunu kullanarak Redux store'a erişiyoruz

    const increment = ()=>{
      setCount(count + 1); // Count'u 1 artırıyoruz
    }
    
    const decrement = ()=>{
      if (count > 0) {
        setCount(count - 1); // Count'u 1 azaltıyoruz, ancak 0'ın altına düşmemesini sağlıyoruz
      }}

    const addBasket = () => {
      const payload = {
        id: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.price,
        description: selectedProduct.description,
        count: count, // Sepete eklenen ürün sayısı
      };
      dispatch(addToBasket(payload)); // Sepete ekleme işlemi için Redux action'ını dispatch ediyoruz
    }

    useEffect(() => {  //useEffect ile component mount edildiğinde çalışacak kod
        // Burada id'ye göre ürün detaylarını alabiliriz
        getProductById();
 
    }, []);

    const getProductById = () => {
      products && products.map((product) => {
          if (product.id == id) {
              // Burada id'ye göre ürün detaylarını alabiliriz
              dispatch(setSelectedProduct(product)) // Redux store'a seçilen ürünü dispatch ediyoruz
          }
      });

    }
        

  return (
    <div className='flex-row' style={{ marginTop: '20px',display:'flex', flexDirection: 'row', justifyContent: 'center', }}>
      <div style={{ marginRight: '40px'}}>
        <img src={image} width={300} height={400} alt="" />
      </div>
      <div>
        <h1 className='title'>{title}</h1>
        <h3 className='description'>{description}</h3>
        <h1 className='price'>{price} $</h1>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <CiCirclePlus onClick={increment} style={{fontSize: '24px', marginRight: '10px', cursor: 'pointer'}} /> <span style={{fontSize: '24px' }}>{count}</span> <CiCircleMinus onClick={decrement} style={{fontSize: '24px', marginLeft: '10px', cursor: 'pointer'}} />
          <div>
            <button onClick={addBasket} style={{ padding: '10px 20px', backgroundColor: '#f0c040', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sepete Ekle</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails