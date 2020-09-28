import styled from "styled-components";

export const Container = styled.View`
    margin: 10px 20px
`;

export const Title = styled.Text`
    padding: 20px;
    align-self: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
`;

export const Button = styled.View`
    background-color: #23b7ca;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    width: 150px;
`;

export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: #1130d2;
    font-weight: bold;
`;

export const Item = styled.View`
    margin: 0 22px 10px;
    z-index: 1;
    color: red;
    border-radius: 5px;
    border-color: #eee;
    border-width: 1px;
    padding: 15px;
    align-items: center;
    flex-direction: row;
`;


export const TitleApplication = styled.Text`
    color: #1ede3e;
    font-size: 16px;
    font-weight: bold;
`;

export const NavbarStyled = styled.View`
    height: 60px;
    align-items: center;
    justify-content: flex-end;
    background-color: #a51ede;
    padding-bottom: 5px;
`;


export const Wrap = styled.View`
    flex : 1;
    margin : 20px
    justify-content: center;
`;

export const TextInputStyled = styled.TextInput`
    border-bottom-width: 2px;
    border-color: #210ecb;
    border-style: solid;
    opacity: 0.5;
    margin-bottom: 10px;
    text-align: center;
    margin: 0 10px;
    padding: 5px;
`;

export const AppContainer = styled.View`
    padding: 10px;
`;


export const BlockAddTodo = styled.View`
    flex-direction: row;
    margin: 10px;
    padding: 10px;
    justify-content: space-around;
`;

export const InputStyled = styled.TextInput`
    width: 60%; 
    borderStyle: solid;
    border-bottom-width: 2px;
    border-bottom-color: #3949ab;
    opacity: 0.6;
`;

export const ButtonAdd = styled.View`
    background-color: #23b7ca;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
`;

