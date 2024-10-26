import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Signin: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignIn = () => {

        if (username && password) {
            Alert.alert('Sign In Successful', `Welcome back, ${username}!`);

            navigation.navigate('Home');
        } else {
            Alert.alert('Sign In Failed', 'Please enter both username and password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholder="Enter your username"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Enter your password"
            />

            <Button title="Sign In" onPress={handleSignIn} />

            <Text style={styles.footer}>
                Don't have an account?
                <Text style={styles.link} onPress={() => navigation.navigate('Signup')}> Sign up</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        marginTop: 20,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    footer: {
        marginTop: 20,
        textAlign: 'center',
    },
    link: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default Signin;

