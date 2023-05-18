import { createSlice } from '@reduxjs/toolkit'


export const getFavoritesFromLS = () => {
  const data = localStorage.getItem('favorite')
  const itemsFavLS = data ? JSON.parse(data) : []
 
 
  return {
       itemsFavLS 
      }
  
}

const {itemsFavLS} = getFavoritesFromLS()
const initialState = {
    
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

export const itemsFavSelect = (state) => state.favorite.items


// Action creators are generated for each case reducer function
export const { addFavItem, removeFavItem} = favoriteSlice.actions

export default favoriteSlice.reducer