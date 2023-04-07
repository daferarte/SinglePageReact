import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut, signUp } from "../store/user";
//metodo de simulacion de almacenamiento del payload
let SingIn = (props) => {
    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user);
    console.log(user);

    let doSignIn = () => {
        dispatch(
            signUp({
                credentials:{
                    email: 'daasd@gmail.com',
                    password: '12345678',
                    username: 'daasd'
                }                
            })
        )
    }

    let doLogOut = () => {
        dispatch(
            logOut()
        )
    }

    return(
        <div>
            {
                user ?
                <button onClick={doLogOut}>Cerrar sesion</button>
                :
                <button onClick={doSignIn}>Ingresar</button>
            }
            
        </div>
    )
}

export default SingIn;