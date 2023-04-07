import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const signUp = createAsyncThunk('user/signUp', async ({credentials})=>{
    // realizar operacion asincrona
    
    let response = await Axios.post(`${apiConfig.domain}/users`, {
        user: credentials
    })   
    console.log(response);
    return response.data.user;

});

export const signIn = createAsyncThunk('user/signIn', async ({credentials})=>{
    // realizar operacion asincrona
    
    let response = await Axios.post(`${apiConfig.domain}/users/signin`, {
        user: credentials
    });

    return response.data.user;

});

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers:{        
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
        },
        // estado pendiente 
        [signIn.pending]: (state, action) => {
            state.status = 'loading';
        },
        // estado finalizado
        [signIn.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        //estado fallido
        [signIn.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;