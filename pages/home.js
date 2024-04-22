import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleBeginOrder = () => {
        const isLoggedIn = false;
        
        if (!isLoggedIn) {
            setShowLogin(true);
        } else {
            navigation.navigate("Stations");
        }
    };

    const handleSignIn = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        navigation.navigate("Stations");
        setShowLogin(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zak's Food Court</Text>
            <View style={styles.imageContainer}>
                <Image source={require('./uc-shield.png')} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleBeginOrder}>
                    <Text style={styles.buttonText}>Begin Order</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showLogin}
                onRequestClose={() => setShowLogin(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Ursinus College</Text>
                        <Text style={styles.subtitleCenter}>Login Page</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            onChangeText={text => setUsername(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        width: 300,
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    subtitleCenter: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        paddingBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
