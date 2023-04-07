import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut, signIn } from "../store";
//metodo de simulacion de almacenamiento del payload
let SingIn = (props) => {
    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user);
    console.log(user);

    let doSignIn = () => {
        dispatch(
            signIn({
                email: 'daferarte@gmail.com',
                jwtToken: 'zcef7w48f7s7wefi7efh'
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