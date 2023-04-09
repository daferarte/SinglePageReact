import styled from "styled-components"

export default {
    colors: {
        white:'#ffffff',
        dark:'#27212e',
        black:'#373737',
        accent:'#e53251',
        gray:'#f2f2f2',
        blue:'#67e7e2'
    },
    dims:{

    }
}

let LayoutContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto minmax(0,1fr) auto;
    & nav {
        background-color: ${({theme})=>theme.colors.dark};
        height:100px;
    }
    & footer{
        height:100px;
        background-color: ${({theme})=>theme.colors.dark};
    }
`;

export let Layout = (props) =>{
    return (
        <LayoutContainer>
            <nav></nav>
            <main>
                {props.children}
            </main>
            <footer></footer>
        </LayoutContainer>
    )
}