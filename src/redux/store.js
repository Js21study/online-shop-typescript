import { configureStore } from '@reduxjs/toolkit'
import item from './slices/itemSlice'
import filter from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    item,
    filter,
  },
})

