import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Tagget templates
let Example = styled.div`
    height: 200px;
    transition: all 0.2s;
    padding: 50px
`;

let Button = styled.button`
    border: solid 1px red;
    background-color: transparent;
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
    border-radius:2px;

`;

let PrimaryButton = styled(Button)`
    background-color: red;
    border:0;
`;

let AppLink = styled(Link)`
    text-decoration: underline;
    font-weight: bold;
    text-transform: uppercase;
`;

let AppInput = styled.input.attrs((props)=>{
    return {
        //type:'email' //reescribe valores finales
        type: props.type ? props.type : "text"  // validacion para definir el type por props
    }
})`
    border: solid 1px red;
`;

let HomePage = (props) => {
    return(
        <Example>
            <p> Hola mundo</p>
            <Button primary>Ejemplo</Button>
            <PrimaryButton>PrimaryButton</PrimaryButton>
            <AppLink to="/videos">Videos</AppLink>
            <AppInput type="email" placeholder="Escribe tu nombre" required></AppInput>
        </Example>
    )
}

export default HomePage;