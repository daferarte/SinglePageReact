import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/signUp', async (credentials)=>{
    // realizar operacion asincrona
    return credentials;
});

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers:{
        signIn: (state, action) =>{
            state.user = action.payload;
        },
        logOut: (state) =>{
            state.user = null;
        }
    },
    extraReducers:{
        
    }
});

export const { signIn, logOut } = userSlice.actions;

export default userSlice.reducer;