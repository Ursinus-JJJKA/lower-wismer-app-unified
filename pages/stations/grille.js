import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Grille = () => {
    const navigation = useNavigation();
    const [orderPopupVisible, setOrderPopupVisible] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    const toggleOrderPopup = (item) => {
        setSelectedSection(item);
        setOrderPopupVisible(!orderPopupVisible);
    };

    const closeOrderPopup = () => {
        setOrderPopupVisible(false);
    };

    const addToCart = () => {
        if (selectedSection) {
            setCartItems([...cartItems, selectedSection]);
            closeOrderPopup();
        }
    };

    const sections = [
        "Meals",
        "Sides"
    ];

    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Checkout")}>
                    <FontAwesome name="shopping-cart" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.screenCenter}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Meals")}>
                    <Text style={styles.buttonText}>Meals</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Sides")}>
                    <Text style={styles.buttonText}>Sides</Text>
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

export default Grille;