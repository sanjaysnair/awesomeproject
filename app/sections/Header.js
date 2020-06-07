import React from 'react';
import { StyleSheet, Text, View, Platform, Image, AsyncStorage, Alert } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = () => {
        // this.setState(previousState => {
        //     return { isLoggedIn: !previousState.isLoggedIn };
        // });
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out!');
            });
        } else {
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if ( result === 'none' ) {
                console.log('NONE');
            } else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                });
            } else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
        });
    };

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={ require('./img/icon.svg') }
                />
                <Text 
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#fff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Platform.OS == 'android' ? '#31e981' : '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000'
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    }
});