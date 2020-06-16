import styled, {css} from 'styled-components';

const defaultButtonStyles = css`
`;
const invertedButtonStyles = css`
    background-color:invert(rgb(242, 255, 250));
    color: invert(black);
    border: 1px solid invert(rgb(0, 0, 0));
    &:hover{
        background-color: black;
        color: #fff;
        border: none;
    }
`;
const googlesignin = css`
    background-color: #4285f4;  
    color: #fff;
    border: none;
    &:hover{
        background-color:#008594;
        border: none;
    }
`
const getButtonStyles = props => {
    if(props.isGoogleSignIn) return googlesignin; 
    else if (props.inverted){
        return invertedButtonStyles;}
    else return defaultButtonStyles;
}


export const ButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 18px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
    ${getButtonStyles}
`