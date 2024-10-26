import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const CoursesDetail: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Six-Month Courses</Text>
                <Text style={styles.course}>First Aid (R1500)</Text>
                <Text style={styles.courseDescription}>The purpose of first aid is to provide recognition and basic maintenance.</Text>
                <Text style={styles.course}>Sewing (R1500)</Text>
                <Text style={styles.courseDescription}>Precious Radebe implemented sewing to dispense modifications and new vestment tailoring services.</Text>
                <Text style={styles.course}>Landscaping (R1500)</Text>
                <Text style={styles.courseDescription}>She emphasized supply services for new entrenched gardens.</Text>
                <Text style={styles.course}>Life Skills (R1500)</Text>
                <Text style={styles.courseDescription}>She emphasized supply skills to voyage basic life essentials.</Text>
                <Text style={styles.title}>Six-Week Courses</Text>
                <Text style={styles.course}>Childminding (R750)</Text>
                <Text style={styles.courseDescription}>Precious emphasized providing basic child and baby care.</Text>
                <Text style={styles.course}>Cooking (R750)</Text>
                <Text style={styles.courseDescription}>Precious emphasized preparing and cooking nutritious family meals.</Text>
                <Text style={styles.course}>Garden Maintenance (R750)</Text>
                <Text style={styles.courseDescription}>Precious emphasized providing basic knowledge of watering, pruning, and planting in a domestic garden.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    course: {
        fontSize: 18,
        marginBottom: 5,
    },
    courseDescription: {
        fontSize: 16,
        marginBottom: 20,
    }
});

export default CoursesDetail;