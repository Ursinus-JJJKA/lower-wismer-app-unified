import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    return (
        <View style={styles.container}>
            <View style={styles.secondaryContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Payment")}>
                    <Text style={styles.buttonTitle}>Dining Dollars</Text>
                    <Text style={styles.buttonText}>Check balance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Payment")}>
                    <Text style={styles.buttonTitle}>Meal Swipe</Text>
                    <Text style={styles.buttonText}>Check balance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Payment")}>
                    <Text style={styles.buttonTitle}>Bear Bucks</Text>
                    <Text style={styles.buttonText}>Check balance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Payment")}>
                    <Text style={styles.buttonTitle}>Credit Card</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handlePress("Payment")}>
                <Text style={styles.continueBtn}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    iconButton: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 3,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    secondaryContainer: {
        flex: 1,
        padding: 20,
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 3,
        borderRadius: 15,
        width: '100%',
        marginBottom: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    buttonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
    },
    buttonText: {
        fontSize: 18,
        marginLeft: 15,
        color: 'black',
        textAlign: 'left',
    },
    continueBtn: {
        backgroundColor: 'rgb(152, 0, 46)',
        paddingVertical: 15,
        paddingHorizontal: 120,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },    
});

export default Payment;