import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import { useEffect } from 'react'
import Loading from './components/Loading' // Assuming you have a Loading component
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state



function App() {

  const {products} = useSelector((store) => store.basket);

  return (
    <PageContainer>
      <Loading />
      <Header /> {/*Header PageContainerin childerini olmuş oldu */}
      <RouterConfig /> {/*RouterConfig sayfaları yönlendiren bir component */}

    </PageContainer>
  )
}

export default App

//Biz burada Product list diye bir component oluşturduk ve sayfa ilk açıldığında useEffect ile bu componenti çağırdık. ve dispatch ile getAllProducts actionunu çağırdık. sonra url adresine istek attık ve oradan gelen verileri store'a kaydettik.
