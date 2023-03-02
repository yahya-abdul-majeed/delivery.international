import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
        items: [],
        isError:false,
        isSuccess:false,
        isLoading:false
}

export const getDishes = createAsyncThunk('cart/getDishes', async(token,thunkAPI)=>{
    try{
        return await cartService.getDishes(token)
    }catch(error){

    }
})

export const addDish = createAsyncThunk('cart/addDish', async({token, dishId},thunkAPI)=>{
    try{
        await cartService.addDish(token,dishId)
    }catch(error){
        
    }
})

export const deleteDish = createAsyncThunk('cart/deleteDish', async({token,dishId,isLastItem},thunkAPI)=>{
    try{
        await cartService.deleteDish(token,dishId,isLastItem)
    }catch(error){
        
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getDishes.pending, (state)=>{
            state.isError = false
            state.isSuccess = false
            state.isLoading = true
        })
        .addCase(getDishes.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            state.items = action.payload
        })
        .addCase(getDishes.rejected,(state)=>{
            state.isError = true
            state.isSuccess = false
            state.isLoading = false
        })
        .addCase(addDish.pending,(state)=>{

        })
        .addCase(addDish.fulfilled,(state)=>{
            
        })
        .addCase(addDish.rejected,(state)=>{

        })
        .addCase(deleteDish.pending,(state)=>{

        })
        .addCase(deleteDish.fulfilled,(state)=>{
            console.log('delete fulfilled')
        })
        .addCase(deleteDish.rejected,(state)=>{
            console.log('delete rejected')
        })
    }
})


export const {} = cartSlice.actions
export default cartSlice.reducer