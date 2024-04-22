import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SubConnect = () => {
    const navigation = useNavigation();
    const [orderPopupVisible, setOrderPopupVisible] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    const toggleOrderPopup = (item) => {
        setSelectedFoodItem(item);
        setOrderPopupVisible(!orderPopupVisible);
    };

    const closeOrderPopup = () => {
        setOrderPopupVisible(false);
    };

    const addToCart = () => {
        if (selectedFoodItem) {
            setCartItems([...cartItems, selectedFoodItem]);
            closeOrderPopup();
        }
    };

    const foodItems = [
        "Baja Chicken",
        "Meatball",
        "Chicken Parmesan",
        "Chicken Salad",
        "Three Cheese",
        "Vegetarian",
        "Tuna Salad",
    ];

    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Checkout")}>
                    <FontAwesome name="shopping-cart" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.foodItemsContainer}>
                {foodItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => toggleOrderPopup(item)}
                    >
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {orderPopupVisible && (
                <View style={styles.orderPopup}>
                    <View style={styles.itemBox}>
                        <Text style={styles.popupText}>{selectedFoodItem}</Text>
                        <TouchableOpacity onPress={addToCart}>
                            <Text style={styles.addButton}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={closeOrderPopup}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
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
        marginBottom: 20,
    },
    foodItemsContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'rgb(152, 0, 46)',
        borderColor: 'rgb(251, 176, 52)',
        borderWidth: 3,
        borderRadius: 15,
        marginBottom: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    orderPopup: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemBox: {
        backgroundColor: 'rgb(152, 0, 46)',
        borderColor: 'rgb(251, 176, 52)',
        borderWidth: 3,
        borderRadius: 15,
        position: 'absolute',
        top: 80,
        left: 20,
        right: 20,
        bottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
    },
    addButton: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
    },
    popupText: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
});

export default SubConnect;