import React from "react";
import styled from 'styled-components';

// Tagget templates
let Example = styled.div`
    height: 200px;
    transition: all 0.2s;
`;

let Button = styled.button`
    border: solid 1px red;
    background-color: ${({primary}) => primary ? 'red' : 'transparent'} ;
`;

let InputText = styled.input`
    border: solid 1px;
    border-color: ${({withError})=> withError ? 'red':'green'}
`;

let HomePage = (props) => {
    return(
        <Example>
            <p> Hola mundo</p>
            <InputText ></InputText>
            <Button primary>Ejemplo</Button>
        </Example>
    )
}

export default HomePage;