import { drawerClasses } from '@mui/material/Drawer';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () => { //localStorage'dan sepeti alma fonksiyonu
    if (localStorage.getItem('basket')) {
        return JSON.parse(localStorage.getItem('basket'));
    }
    return [];
}

const initialState = { // Sepet başlangıç durumu
  products: getBasketFromStorage(), // Sepetteki ürünler
  drawer: false
}

const writeBasketToLocalStorage = (basket) => { //sepetteki ürünleri localStorage'a yazma fonksiyonu
    localStorage.setItem('basket', JSON.stringify(basket)); // Sepeti JSON formatında localStorage'a kaydet
}


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        const findProduct = state.products.find((product) => product.id === action.payload.id); // Sepetteki ürünü bul
        if (findProduct) { // Eğer ürün zaten sepette varsa
             // Ürünün miktarını artır
             const extractedProduct =  state.products.filter((product) => product.id !== action.payload.id); // state.products.filter ile döndük her birini product ile yakaladık. Mevcut ürünü sepetten çıkar
             findProduct.count += action.payload.count; // Ürünün miktarını artır
             state.products = [...extractedProduct, findProduct]; // Güncellenmiş ürünü sepete ekle
              writeBasketToLocalStorage(state.products); // Sepeti güncel localStorage'a yaz

        } else { // Eğer ürün sepette yoksa
            state.products = [...state.products, {...action.payload}] // Ürünü sepete ekle ve miktarını 1 olarak ayarla
            writeBasketToLocalStorage(state.products); // Sepeti güncel localStorage'a yaz
        }
    },
    setDrawer: (state) => {
        state.drawer = !state.drawer;
    } 
  }
})

export const { addToBasket, setDrawer } = basketSlice.actions

export default basketSlice.reducer