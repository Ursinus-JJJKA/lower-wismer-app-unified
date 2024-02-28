import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Jazzmans = () => {
    const navigation = useNavigation();
    const [orderPopupVisible, setOrderPopupVisible] = useState(false);
    const [selectedFoodSection, setSelectedFoodSection] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    const toggleOrderPopup = (item) => {
        setSelectedFoodSection(item);
        setOrderPopupVisible(!orderPopupVisible);
    };

    const closeOrderPopup = () => {
        setOrderPopupVisible(false);
    };

    const addToCart = () => {
        if (selectedFoodSection) {
            setCartItems([...cartItems, selectedFoodSection]);
            closeOrderPopup();
        }
    };

    const foodSections = [
        "Coffee",
        "Tea",
        "Breakfast",
        "Baked Goods",
    ];

    const coffees = [
        "Regular/Decaf",
        "Cappuccino",
        "Latte",
        "Mocha",
        "Espresso",
        "Americano",
        "Cafe au Lait",
        "Caramel Delight",
        "Caramel Latte",
        "Tuxedo Mocha",
        "White Chocolate Mocha",
        "Creme Brulee",
        "Hot Chocolate",
        "Flavored Steamer",
    ];

    const teas = [
        "Hot/Iced Tea",
        "Hot/Iced Tea Latte",
        "Chai Latte",
        "Matcha Latte",
    ];

    const breakfastItems = [
        "Toasted Bagel",
        "Bagel w/ Spread",
        "English Muffin Egg Sandwich",
        "Bagel Egg Sandwich",
    ];

    const bakedGoods = [
        "Muffin",
        "Cinnamon Bun",
    ];

    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Checkout")}>
                    <FontAwesome name="shopping-cart" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.screenCenter}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Coffee")}>
                    <Text style={styles.buttonText}>Coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Tea")}>
                    <Text style={styles.buttonText}>Tea</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Breakfast")}>
                    <Text style={styles.buttonText}>Breakfast</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress("Baked Goods")}>
                    <Text style={styles.buttonText}>Baked Goods</Text>
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

export default Jazzmans;
