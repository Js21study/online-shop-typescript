import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProductType } from '../../components/Item/Item'
import { RootState } from '../store'

type fetchItemsArg = {
    sort: string,
    order: "asc" | "desc"
    category: number,
    type: number,
    searchVal: string,
    pageVal: number,
}

export const fetchItems = createAsyncThunk<ProductType[] ,fetchItemsArg>('item/fetchItems', async (params) => {
  const {
    sort,
    order,
    category,
    type,
    searchVal,
    pageVal
  } = params
    const {data} = await axios.get(`https://638f44004ddca317d7f333ea.mockapi.io/items?page=${pageVal}&limit=3&${
      Number(category) > 0 ? `category=${category}&`: '' 
      }sortBy=${sort}&order=${order}${searchVal}&${
        Number(type) > 0 ? `types=${type}&`: '' 
        }`)
    return data
})

export enum Status {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}

interface ItemSliceStateInterface {
  items: ProductType[];
  status: Status;

}

const initialState: ItemSliceStateInterface = {
    items: [],
    status: Status.LOADING,
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
   
  },

  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    })

    builder.addCase(fetchItems.fulfilled, (state, action) => {

      state.items = action.payload;
      state.status = Status.LOADED;
    })


    builder.addCase(fetchItems.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
    })
}
})

// Action creators are generated for each case reducer function
// export const {  } = itemSlice.actions

export const ItemSliceSelectorItems = (state: RootState) => state.item.items
export const ItemSliceSelectorStatus = (state: RootState) => state.item.status

export default itemSlice.reducer