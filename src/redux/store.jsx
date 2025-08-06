import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlices'
import productReducer from './slices/productSlices'
import basketReducer from './slices/basketSlices'

const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketReducer
  },
})

export default store