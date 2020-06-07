import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native'; 

export class Finish extends React.Component {
    static navigationOptions = {
        header: null
    };

    exportQuiz = () => {
        this.props.navigation.navigate('HomeRT');
    }

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - no score returned');
        let questionMissed = this.props.navigation.getParam('missed', 'Error - no missed questions');
        let totalMissed = this.props.navigation.getParam('questions', 'Error - no questions returned');

        return (
            <View style={styles.container}>
                <Text>Your quiz score was {userScore}</Text>
                <Text>You missed on {questionMissed} out of total {totalMissed}</Text>

                <TouchableHighlight style={styles.button} onPress={this.exitQuiz}>
                    <Text>Finish Quiz</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});