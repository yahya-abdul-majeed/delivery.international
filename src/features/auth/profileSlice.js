import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import profileService from "./profileService";



const initialState = {
    user: null,
    isError:false,
    isSuccess:false,
    isLoading:false
}

export const getProfile = createAsyncThunk('profile/getProfile' ,async(token, thunkAPI)=>{
    try{
        return await profileService.getProfile(token)
    }catch(error){
        thunkAPI.rejectWithValue("fuck it bitch")
    }
})

export const updateProfile = createAsyncThunk('profile/updateProfile', async(user,token,thunkAPI)=>{
    try{
        return await profileService.updateProfile(user,token)
    }catch(error){
        thunkAPI.rejectWithValue('what the fuck')
    }
})

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess =false;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getProfile.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getProfile.fulfilled,(state,action)=>{
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
            state.isLoading = false;
            console.log("this is action payload")
            console.log(action)
        })
        .addCase(getProfile.rejected,(state)=>{
            state.isSuccess =false;
            state.isError = true;
            state.user = null;
            state.isLoading = false;
        })
    }
})

export const {reset} = profileSlice.actions;
export default profileSlice.reducer;