import { createSlice } from "@reduxjs/toolkit"
import Products from '../Data/Products.json'

export const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        value: {
            categorySelected:"",
            idSelected:"",
            allProducts: Products ,
            productSelected: []
        }
    },
    reducers: {
       setCategorySelected: (state, action) => {
        state.value.categorySelected = action.payload
        state.value.productSelected = state.value.allProducts.filter(product => product.category === action.payload)
    },
       setIdSelected: (state,action) => {state.value.idSelected = action.payload}
    }
})

export const {setCategorySelected, setIdSelected} = shopSlice.actions
export default shopSlice.reducer