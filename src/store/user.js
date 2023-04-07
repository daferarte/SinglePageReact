import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const signUp = createAsyncThunk('user/signUp', async (credentials)=>{
    // realizar operacion asincrona
    
    let response = await Axios.post(`${apiConfig.domain}/users`, {
        user: credentials.credentials
    })   
    console.log(response);
    return response.data.user;

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
        // estado pendiente 
        [signUp.pending]: (state, action) => {
            state.status = 'loading';
        },
        // estado finalizado
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        //estado fallido
        [signUp.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

export const { signIn, logOut } = userSlice.actions;

export default userSlice.reducer;