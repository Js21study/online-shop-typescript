import { configureStore } from '@reduxjs/toolkit'
import item from './slices/itemSlice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import favorite from './slices/favoriteSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    item,
    filter,
    cart,
    favorite,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch