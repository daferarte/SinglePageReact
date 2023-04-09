import React from "react";
import styled from 'styled-components';

// Tagget templates
let Example = styled.div`
    background-color: red;
    height: 200px;
`;

let HomePage = (props) => {
    return(
        <Example></Example>
    )
}

export default HomePage;