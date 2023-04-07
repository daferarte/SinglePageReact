//manejo inicial del redux para almacenamiento de usuario
import {configureStore} from '@reduxjs/toolkit';

import userSlice from './user';



export const store = configureStore({
    reducer:{
        user: userSlice
    }
})