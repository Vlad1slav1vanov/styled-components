import React, { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background-color: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}
`

const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C/Users/Vlad1slav1vanov>'])

    const onKeyPress = (evt) => {
        if (evt.charCode === 13) {
            setLines([...lines, 'C/Users/Vlad1slav1vanov>'])
        }
    }

    return (
        <Flex>
            <Flex direction={'column'} margin='0 10px'>
                {lines.map(line => 
                    <Line color={color}>{line}</Line>
                    )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}

export default Console;