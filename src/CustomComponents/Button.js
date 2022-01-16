import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import theme from "../Theme";


const StyledButton = styled(Button)((props) => ({
    width: '114px',
    height: '40px',
    backgroundColor: props.myBackgroundColor ? props.myBackgroundColor : 'white',
    fontWeight: "300",
    color: props.myBackgroundColor ? '#fff' : '#528E3D',
    border: !props.myBackgroundColor ? '2px solid #528E3D' : '0',
    borderRadius: '15px',
    fontFamily: "Jost" ,
    ':hover':{
        backgroundColor: props.myBackgroundColor ? props.myBackgroundColor : 'white',
    }
  }));
 


export function CustomButton(props) {
    let color = null;
    if(props.color==='grey'){color="#C4C4C4"}else if(props.color==='green'){color="#528E3D"}
    return <StyledButton onClick={props.onClick} myBackgroundColor={color}>{props.children}</StyledButton>
}