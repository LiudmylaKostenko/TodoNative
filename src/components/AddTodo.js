import React, { useState } from 'react';
import { TouchableHighlight, Alert } from 'react-native';
import { BlockAddTodo, ButtonAdd, ButtonTitle, InputStyled } from '../styledComponents';

export const AddTodo = ({ onSubmit }) => {

    const [valueTitle, setTitle] = useState('');

    const onAddHandler= () => {
        if (!valueTitle.trim()){
            Alert.alert('The name of todo cannot be an empty');
        } else
        if (valueTitle.trim().length < 5){
            Alert.alert(
                'Error', `Minimum length of todo title 5 symbols, now is ${
                    valueTitle.trim().length}`
            )} else {
            onSubmit(valueTitle);
            setTitle('');
        }
    };

    return(
        <BlockAddTodo>
            <InputStyled
                onChangeText={setTitle}
                value = {valueTitle}
                placeholder='Enter the name of our todo...'
                autoFocus={true}
                maxLength={40}
            />
            <TouchableHighlight onPress={onAddHandler}>
                <ButtonAdd>
                    <ButtonTitle>Add todo at list</ButtonTitle>
                </ButtonAdd>
            </TouchableHighlight>
        </BlockAddTodo>
    )
};
