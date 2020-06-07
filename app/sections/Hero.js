import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {
    render () {
        return (
            <Image 
                style={styles.heroStyle}
                source={ require('./img/imac.jpeg') }
            />
        );
    }
}

const styles = StyleSheet.create({
    heroStyle: {
        flex: 8,
        width: undefined,
        height: undefined,
    }
});