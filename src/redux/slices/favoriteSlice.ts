import { createSlice } from '@reduxjs/toolkit'
import { getFavoritesFromLS } from '../../counts'
import { ProductType } from '../../components/Item/Item'
import { RootState } from '../store'




const {itemsFavLS} = getFavoritesFromLS()



interface FavoriteStateInterface {
  items: ProductType[]
}
const initialState: FavoriteStateInterface = {
    
    items: itemsFavLS,
    
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavItem(state, action) {

        const findItem = state.items.find( (obj) => 
          obj.id === action.payload.id
        )
  
        if (findItem) {
          state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        } else {
          state.items.push({
          ...action.payload
         });
        }
       
      },

    removeFavItem(state, action) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      },
     
  
     
  },


})

export const itemsFavSelect = (state: RootState) => state.favorite.items


// Action creators are generated for each case reducer function
export const { addFavItem, removeFavItem} = favoriteSlice.actions

export default favoriteSlice.reducer