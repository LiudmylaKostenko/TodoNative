import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Item } from '../styledComponents';

export const TodoItem = ({ item, onRemoveItem, onEdit }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
            onPress={() => onEdit(item.id)}
            onLongPress={() => onRemoveItem(item.id)}
        >
            <Item>
                <Text >{item.title}</Text>
            </Item>
        </TouchableOpacity>
    );
};



