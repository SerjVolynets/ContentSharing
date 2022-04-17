
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
} from 'react-native';

const Log_in = () => {
    const [userName, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Please log in</Text>
            </View>

            <View>
                <View>
                    <TextInput style={styles.input} onChangeText={onChangeUserName} value={userName} />
                </View>
                <View>
                    <TextInput style={styles.input} onChangeText={onChangePassword} value={password} />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button
                        onPress={() => null}
                        title="Log in"
                        color="#841584"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        flex: 2,
    },
    logoText: {
        fontSize: 32,
    },
    buttonsContainer: {
        flex: 3,
        padding: 20,
    },
    button: {
        paddingBottom: 20,
    },
    inputsContainer: {

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Log_in;
