import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SubConnect = () => {
    const navigation = useNavigation();
    const [orderPopupVisible, setOrderPopupVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('Sandwiches & Sides');

    const handlePress = (element) => {
        navigation.navigate(element);
    };

    const toggleOrderPopup = (item) => {
        setSelectedItem(item);
        setOrderPopupVisible(!orderPopupVisible);
    };

    const closeOrderPopup = () => {
        setOrderPopupVisible(false);
    };

    const addToCart = () => {
        if (selectedItem) {
            setCartItems([...cartItems, selectedItem]);
            closeOrderPopup();
        }
    };

    const items = [
        "Baja Chicken",
        "Meatball",
        "Chicken Parmesan",
        "Chicken Salad",
        "Three Cheese",
        "Vegetarian",
        "Tuna Salad",
        "Chips",
    ];

    const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search menu"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'Sandwiches & Sides' && styles.activeTab]}
                    onPress={() => setActiveTab('Sandwiches & Sides')}
                >
                    <Text style={styles.tabText}>Sandwiches & Sides</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.itemsContainer}>
                {(activeTab === 'Sandwiches & Sides' && filteredItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => toggleOrderPopup(item)}
                    >
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                )))}
            </ScrollView>
            <TouchableOpacity style={styles.iconButton} onPress={() => handlePress("Checkout")}>
                <FontAwesome name="shopping-cart" size={30} color="white" />
            </TouchableOpacity>
            {orderPopupVisible && (
                <View style={styles.orderPopup}>
                    <View style={styles.itemBox}>
                        <TouchableOpacity onPress={closeOrderPopup}>
                            <Image source={require('./x.png')} style={styles.closeButton} />
                        </TouchableOpacity>
                        <Text style={styles.popupText}>{selectedItem}</Text>
                        <TouchableOpacity onPress={addToCart}>
                            <Text style={styles.addButton}>Add to Cart</Text>
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
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    tabButton: {
        padding: 10,
        borderRadius: 15,
    },
    activeTab: {
        backgroundColor: 'lightgrey',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemsContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 3,
        borderRadius: 15,
        marginBottom: 20,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
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
        backgroundColor: 'white',
        borderRadius: 15,
        position: 'absolute',
        top: 15,
        left: 0,
        right: 0,
        bottom: -10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        width: 40,
        height: 40,
        bottom: 205,
        right: 150,
    },       
    addButton: {
        backgroundColor: 'rgb(152, 0, 46)',
        paddingVertical: 15,
        paddingHorizontal: 120,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        top: 200,
    },
    popupText: {
        fontSize: 24,
        color: 'black',
        marginBottom: 20,
    },
    iconButton: {
        backgroundColor: 'rgb(152, 0, 46)',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginHorizontal: 20,
    },
});

export default SubConnect;