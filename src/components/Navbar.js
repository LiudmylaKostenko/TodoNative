import  React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export const Navbar = ({title}) => {
    return(
        <View style={styles.navbar}>
            <Text style={ styles.text}>{title}</Text>
        </View>
    )
};

const styles = new StyleSheet.create({
    navbar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#a51ede',
        paddingBottom: 5
    },
    text: {
        color: '#1ede3e',
        fontSize: 16,
        fontWeight: 'bold'
    }
});