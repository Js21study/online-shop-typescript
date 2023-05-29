import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { itemsCartLS } from '../../counts'




export type CartProductType = {
  id: string,
  imageUrl: string, 
  title: string, 
  types: number, 
  price: number, 
  catgory: number, 
  rating: number,
  count: number,

}

interface CartSliceStateInterface {
    totalPrice: number,
    items: CartProductType[],
    totalCount: number,
}

const initialState: CartSliceStateInterface = {
    totalPrice: itemsCartLS.totalPrice,
    items: itemsCartLS.items ,
    totalCount: itemsCartLS.totalCount,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      
        const findItem = state.items.find( (obj) => 
          obj.id === action.payload.id
        )
  
        if (findItem) {
          findItem.count++
        } else {
          state.items.push({
          ...action.payload,
          count: 1
         });
        }
  
        state.totalPrice = state.items.reduce((sum, obj) => {
              return (obj.price * obj.count) + sum
            }, 0)
        
        state.totalCount = state.items.reduce((sum, obj) => {
            return obj.count + sum
            }, 0)
      },
     
      minusItem(state, action) {
        const findItem = state.items.find( (obj) => 
          obj.id === action.payload
        )
  
        if (findItem) {
          findItem.count--
        }
  
        state.totalPrice = state.items.reduce((sum, obj) => {
          return (obj.price * obj.count) + sum
        }, 0)

        state.totalCount = state.items.reduce((sum, obj) => {
            return obj.count + sum
            }, 0)
      },
      removeItem(state, action) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice = state.items.reduce((sum, obj) => {
          return (obj.price * obj.count) + sum
        }, 0)

        state.totalCount = state.items.reduce((sum, obj) => {
            return obj.count + sum
            }, 0)
      },
      clearItems(state) {
        state.items = [];
        state.totalPrice = 0;
        state.totalCount = 0;
      },
  
     
  },


})
export const totalPriceSelect = (state: RootState) => state.cart.totalPrice
export const itemsCartSelect = (state: RootState) => state.cart.items
export const totalCountSelect = (state: RootState) => state.cart.totalCount

// Action creators are generated for each case reducer function
export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer