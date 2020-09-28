import React, { useState } from 'react';
import { Modal, TouchableHighlight, Alert } from 'react-native';
import { ButtonContainer, ButtonTitle, TextInputStyled, Wrap, Button } from '../styledComponents';

export const EditItemModal = ({ visible, onCancelHandler, valueTodoItem, onSaveValue, onMainScreen }) => {

    const [editTitleValue, setTitleValue] = useState(valueTodoItem)

    const onSaveHandler = () => {
       if (editTitleValue.trim().length < 5){
            Alert.alert(
                'Error', `Minimum length of todo title 5 symbols, now is ${
                    editTitleValue.trim().length}`
            )} else {
            onSaveValue(editTitleValue);
            onMainScreen();
       }
    };

    return (
        <Modal visible={visible} animationType="slide">
            <Wrap>
                <TextInputStyled
                    value={editTitleValue}
                    onChangeText={setTitleValue}
                    autoCorect={false}
                    maxLength={40}
                    autoFocus={true}
                />
                <ButtonContainer>
                    <TouchableHighlight onPress={onCancelHandler}>
                        <Button>
                            <ButtonTitle>Cancel</ButtonTitle>
                        </Button>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={onSaveHandler}>
                        <Button>
                            <ButtonTitle>Save</ButtonTitle>
                        </Button>
                    </TouchableHighlight>
                </ButtonContainer>
            </Wrap>
        </Modal>
    );
};
