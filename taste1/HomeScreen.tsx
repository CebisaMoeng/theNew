import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Empowering the Nation!</Text>
            <Text style={styles.description}>Our mission is to provide skills for domestic workers and gardeners.</Text>
            <Button title="CourseDetail" onPress={() => navigation.navigate('Details')} />
            <Button title="Calculate Fees" onPress={() => navigation.navigate('Calculate')} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default HomeScreen;