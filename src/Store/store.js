import { configureStore } from "@reduxjs/toolkit";
import shopReducer from '../Features/shopSlice'

export default configureStore({
    reducer: {
        shopReducer
    }
})
