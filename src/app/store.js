import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/auth/profileSlice';
import dishReducer from '../features/dish/dishSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/order/orderSlice'


export default configureStore({
    reducer:{
        auth: authReducer,
        profile: profileReducer,
        dish: dishReducer,
        cart: cartReducer,
        order: orderReducer
    }
});