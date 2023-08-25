import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import shopReducer from '../Features/shopSlice'
import userReducer from '../Features/userSlice'
import cartReducer from '../Features/cartSlice'
import { shopApi } from '../Services/shopServices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from '../Services/authServices'

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer, 
        userReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store