import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import orderService from "./orderService";

const initialState = {
    orders:[],
    isError:false,
    isSuccess:false,
    isLoading:false
}

export const getOrders = createAsyncThunk('order/getOrders', async(token)=>{
    try{
        return await orderService.getOrders(token)
    }catch(error){

    }
})

export const getSpecificOrder = createAsyncThunk('order/getSpecificOrder', async ({token,orderId})=>{
    try{
        return await orderService.getSpecificOrder(token,orderId)
    }catch(error){

    }
})

export const createOrder = createAsyncThunk('order/createOrder',async ({token,data})=>{
    try{
        await orderService.createOrder(token,data)
    }catch(error){

    }
})

export const confirmOrder = createAsyncThunk('order/confirmOrder',async ({token,orderId})=>{
    try{
        await orderService.confirmOrder(token,orderId)
    }catch(error){

    }
})

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getOrders.fulfilled, (state,action)=>{
            state.orders = action.payload   
        })
        .addCase(confirmOrder.fulfilled,()=>{

        })
        
    }
})

export const {reset} = orderSlice.actions
export default orderSlice.reducer