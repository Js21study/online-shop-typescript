import { createSlice } from '@reduxjs/toolkit'




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
export const categoryIndexSelect = (state) => state.filter.categoryIndex
export const typeIndexSelect = (state) => state.filter.typeIndex
export const sortSelectObj = (state) => state.filter.sortSelect
export const filter = (state) => state.filter
export const sortSelectObjSort = (state) => state.filter.sortSelect.sort
// Action creators are generated for each case reducer function
export const { setCategoryIndex, setSortSelect, setTypeIndex, setSearch, setPage } = filterSlice.actions

export default filterSlice.reducer