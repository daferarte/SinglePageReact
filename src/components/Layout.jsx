import React from "react";
import { LayoutContainer } from "../theme";
import Header from "./Header";
import Footer from "./Footer";

let Layout = (props) =>{
    return(
        <LayoutContainer>
            <nav>
                <Header></Header>
            </nav>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </LayoutContainer>
    )
}

export default Layout;