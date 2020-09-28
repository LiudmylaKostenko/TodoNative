import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { EditItemModal } from "../components/EditItemModal";
import { Container, Title, ButtonTitle, Button, ButtonContainer } from '../styledComponents';

export const EditTodoScreen = ({ backHandler, item, onSaveValue }) => {
    const [modal, setModal] = useState(false);

    const onSaveHandler = title => {
        onSaveValue(item.id, title);
        setModal(false);
    };

    return (
        <Container>
            <EditItemModal
                visible={modal}
                valueTodoItem={item.title}
                onSaveValue={onSaveHandler}
                onCancelHandler={() => setModal(false)}
                onMainScreen={backHandler}
            />
            <Title>{item.title}</Title>
            <ButtonContainer>
                <TouchableHighlight onPress={backHandler}>
                    <Button>
                        <ButtonTitle>back</ButtonTitle>
                    </Button>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => setModal(true)}>
                    <Button>
                        <ButtonTitle>edit todoitem</ButtonTitle>
                    </Button>
                </TouchableHighlight>
            </ButtonContainer>
        </Container>
    );
};
