import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { signIn } from "../store/user";

let SingIn = (props) => {
    
    let dispatch = useDispatch();

    const { register, handleSubmit } = useForm(); //hook para enviar formularios

    let onSubmit = (data) =>{
        dispatch(
            signIn(
                {credentials:data}
            )
        )
    }

    return(
        <div>
            <form onSubmit={handleSubmit( onSubmit )}>
                <input type="email" name="email" {...register("email")} placeholder="Correo electronico"/>
                <input type="password" name="password" {...register("password")} placeholder="Contraseña"/>
                <input type="submit" value="Enviar" />
            </form>            
        </div>
    )
}

export default SingIn;