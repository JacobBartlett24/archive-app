import { useState } from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color:black;
`

function Footer(){

    return(
        <FooterStyle>
            <p>Footer</p>
        </FooterStyle>
    )
}

export default Footer;