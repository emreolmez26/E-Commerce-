import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading' // Assuming you have a Loading component
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { setDrawer } from './redux/slices/basketSlices';



function App() {

  const {products, drawer} = useSelector((store) => store.basket);
  const dispatch = useDispatch(); // Dispatch function to access Redux store

  return (
    <PageContainer>
      <Loading />
      <Header /> {/*Header PageContainerin childerini olmuş oldu */}
      <RouterConfig /> {/*RouterConfig sayfaları yönlendiren bir component */}
      <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer} >
          {
              products && products.map((product) => {
                  return (
                      <div className='flex-row' style={{ padding: '20px' }}>
                          <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                          <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                          <p>{product.price}TL</p>
                          <button style={{ marginLeft: 'auto', backgroundColor: 'red', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', width: '50px', height: '30px' }}>Sil</button> 
                      </div>
                  )
              })
          }
      </Drawer>


    </PageContainer>
  )
}

export default App

//Biz burada Product list diye bir component oluşturduk ve sayfa ilk açıldığında useEffect ile bu componenti çağırdık. ve dispatch ile getAllProducts actionunu çağırdık. sonra url adresine istek attık ve oradan gelen verileri store'a kaydettik.
