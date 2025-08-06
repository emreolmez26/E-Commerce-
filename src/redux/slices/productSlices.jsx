import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products :[],
  selectedProduct: {},
  loading: false,
}

const BASE_URL = "https://fakestoreapi.com";

export const  getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload; // Seçilen ürünü state'e kaydet
        },

    },
    extraReducers: (builder) => {
      builder.addCase(getAllProducts.pending, (state) => { //bekleme aşamasında
        state.loading = true;
      });
      builder.addCase(getAllProducts.fulfilled, (state, action) => { //başarılı bir şekilde veriler geldiğinde
        state.loading = false;
        state.products = action.payload;
      });
      builder.addCase(getAllProducts.rejected, (state) => { //hata durumunda
        state.loading = false;
      });
    }
})

export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer
