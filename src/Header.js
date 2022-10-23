import { useState } from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 60px;
    color: white;
    font-size: larger;
    font-weight: bold;
`

function Header(){

    return(
        
        <HeaderStyle>
            <div>Archived</div>
        </HeaderStyle>
    )
}

export default Header;