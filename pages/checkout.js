import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
    const navigation = useNavigation();

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    return (
        <View style={styles.container}>
            <View style={styles.screenCenter}>
                <Text style={styles.totalText}>Total:</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Jazzman's Cafe & Bakery")}>
                    <Text style={styles.buttonText}>Meal Swipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("The Grille")}>
                    <Text style={styles.buttonText}>Dining Dollars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("SubConnections")}>
                    <Text style={styles.buttonText}>Bear Bucks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Tres Habeneros")}>
                    <Text style={styles.buttonText}>Credit Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    totalText: {
        fontSize: 20,
        padding: 20,
    },
    sideContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    iconButton: {
        backgroundColor: 'rgb(152, 0, 46)',
        borderColor: 'rgb(251, 176, 52)',
        borderWidth: 3,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    screenCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'rgb(152, 0, 46)',
        borderColor: 'rgb(251, 176, 52)',
        borderWidth: 3,
        borderRadius: 15,
        width: '100%',
        marginBottom: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});

export default Checkout;