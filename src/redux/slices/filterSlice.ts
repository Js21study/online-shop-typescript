import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';




const initialState = {
    categoryIndex: 0,
    sortSelect: {
        name: 'по рейтингу',
        sort: 'rating' ,
  
    },
    typeIndex: 0,
    search: '',
    page: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryIndex(state, action) {

        state.categoryIndex = action.payload;
      },
    setSortSelect(state, action) {
  
        state.sortSelect = action.payload
      },
    setTypeIndex(state, action) {
  
        state.typeIndex = action.payload
      },
    setSearch(state, action) {
  
      state.search = action.payload
    },
    setPage(state, action) {

      state.page = action.payload
    },
     
  },


})
export const categoryIndexSelect = (state: RootState) => state.filter.categoryIndex
export const typeIndexSelect = (state: RootState) => state.filter.typeIndex
export const sortSelectObj = (state: RootState) => state.filter.sortSelect
export const filter = (state: RootState) => state.filter
export const sortSelectObjSort = (state: RootState) => state.filter.sortSelect.sort
// Action creators are generated for each case reducer function
export const { setCategoryIndex, setSortSelect, setTypeIndex, setSearch, setPage } = filterSlice.actions

export default filterSlice.reducer