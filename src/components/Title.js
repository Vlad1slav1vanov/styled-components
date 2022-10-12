import React, { Children } from "react";
import styled from "styled-components";


const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.colors.primary};
`

const Title = (props) => {
    return (
        <StyledTitle {...props}>
            
        </StyledTitle>
    )
}

export default Title;