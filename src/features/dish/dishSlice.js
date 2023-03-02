import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dishService from "./dishService";

const initialState = {
    dishes:null,
    isError: false,
    isSuccess:false,
    isLoading: false
}

export const getDishes = createAsyncThunk('dish/getDishes', async(filterData)=>{
    try{
        return await dishService.getDishes(filterData.category,filterData.isVeg, filterData.sorting, filterData.page)
    }catch(error){

    }
})

export const dishSlice = createSlice({
    name: 'dish',
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
            state.dishes = action.payload.dishes
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
        })
        .addCase(getDishes,(state)=>{
            state.isError = true
            state.isSuccess = false
            state.isLoading = false
        })
    }
})

export const {reset} = dishSlice.actions
export default dishSlice.reducer