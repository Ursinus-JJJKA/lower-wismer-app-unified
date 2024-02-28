import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zak's Food Court</Text>
            <View style={styles.imageContainer}>
                <Image source={require('./uc-shield.png')} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('Stations')}>
                    <Text style={styles.buttonText}>begin order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        height: 250,
        width: 196,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'rgb(152, 0, 46)',
        borderColor: 'rgb(251, 176, 52)',
        borderWidth: 3,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default HomeScreen;