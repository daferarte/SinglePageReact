//manejo inicial del redux para almacenamiento de usuario
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import userSlice from './user';
import storage  from 'redux-persist/lib/storage';

const reducer = combineReducers({
    user: userSlice
});

const persistConfg = {
    key: 'root',
    storage: storage,
    whilelist: ['user'], //pasa lo que se quiere que se guarde en el localstorage
    blacklist: [], //pasa lo que se quiere que no se guarde en el localstorage
}

const persistedReducer = persistReducer(persistConfg, reducer);

export const store = configureStore({
    reducer:{
        user: persistedReducer
    }
})

export const persistor = persistStore(store);