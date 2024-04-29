import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SubConnect = () => {
    const navigation = useNavigation();
    const [orderPopupVisible, setOrderPopupVisible] = useState(false);
    const [selectedFoodSection, setSelectedFoodSection] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('Sandwiches & Sides');

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
});

export default SubConnect;