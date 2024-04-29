import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Stations = () => {
    const navigation = useNavigation();

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    return (
        <View style={styles.container}>
            <View style={styles.screenCenter}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Jazzman's Cafe & Bakery")}>
                    <Text style={styles.buttonText}>Jazzman's Cafe & Bakery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("The Grille")}>
                    <Text style={styles.buttonText}>The Grille</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("SubConnections")}>
                    <Text style={styles.buttonText}>SubConnections</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Tres Habeneros")}>
                    <Text style={styles.buttonText}>Tres Habeneros</Text>
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
    sideContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    iconButton: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
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
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 3,
        borderRadius: 15,
        width: '100%',
        marginBottom: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
});

export default Stations;