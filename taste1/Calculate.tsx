import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CourseFeeCalculator: React.FC = () => {
    const [courseType, setCourseType] = useState<'six-week' | 'six-month'>('six-week');
    const [numberOfCourses, setNumberOfCourses] = useState<number>(1);
    const [totalFees, setTotalFees] = useState<number | null>(null);

    const calculateFees = () => {
        let fees = 0;

        if (courseType === 'six-week') {
            switch (numberOfCourses) {
                case 1:
                    fees = 1500;
                    break;
                case 2:
                    fees = 1500 + 1500 * 0.95;
                    break;
                case 3:
                    fees = 1500 + 1500 + 1500 * 0.90;
                    break;
                default:
                    fees = 1500 * numberOfCourses + 1500 * 0.85;
                    break;
            }
        } else if (courseType === 'six-month') {
            switch (numberOfCourses) {
                case 1:
                    fees = 750;
                    break;
                case 2:
                    fees = 750 + 750 * 0.95;
                    break;
                case 3:
                    fees = 750 + 750 + 750 * 0.90;
                    break;
                default:
                    fees = 750 * numberOfCourses;
                    break;
            }
        }

        setTotalFees(fees);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course Fee Calculator</Text>

            <Text>Select Course Type:</Text>
            <Button title="Six-Week Course" onPress={() => setCourseType('six-week')} />
            <Button title="Six-Month Course" onPress={() => setCourseType('six-month')} />

            <Text style={styles.label}>Number of Courses:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={numberOfCourses.toString()}
                onChangeText={(text) => setNumberOfCourses(Number(text))}
            />

            <Button title="Calculate Fees" onPress={calculateFees} />

            {totalFees !== null && (
                <Text style={styles.result}>
                    Total Fees: R{totalFees.toFixed(2)}
                </Text>
            )}
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
        width: '100%',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CourseFeeCalculator;