import { configureStore } from '@reduxjs/toolkit'
import item from './slices/itemSlice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    item,
    filter,
    cart
  },
})

