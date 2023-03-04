import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchItems = createAsyncThunk('item/fetchItems', async (params) => {
  const {
    sort,
    order,
    category,
    type,
    searchVal,
  } = params
    const {data} = await axios.get(`https://638f44004ddca317d7f333ea.mockapi.io/items?${
      Number(category) > 0 ? `category=${category}&`: '' 
      }sortBy=${sort}&order=${order}${searchVal}&${
        Number(type) > 0 ? `types=${type}&`: '' 
        }`)
    return data
})

const initialState = {
    items: [],
    status: 'loading'
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
   
  },

  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    })

    builder.addCase(fetchItems.fulfilled, (state, action) => {

      state.items = action.payload;
      state.status = 'loaded';
    })


    builder.addCase(fetchItems.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    })
}
})

// Action creators are generated for each case reducer function
// export const {  } = itemSlice.actions

export default itemSlice.reducer