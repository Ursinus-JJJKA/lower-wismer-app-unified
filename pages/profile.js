import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
      console.log('Username:', username);
      console.log('Password:', password);
      setShowLogin(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Balances</Text>
        <Text style={styles.subtitle}>Meal Swipe</Text>
        <Text style={styles.amountText}>Amount Left:</Text>
        <Text style={styles.subtitle}>Dining Dollars</Text>
        <Text style={styles.amountText}>Amount Left:</Text>
        <Text style={styles.subtitle}>Bear Bucks</Text>
        <Text style={styles.amountText}>Amount Left:</Text>
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
              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>sign in</Text>
                </TouchableOpacity>
              </View>       
          </View>
      </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  textBox: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 3,
    borderColor: "black",
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    height: 400,
    width: 300,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  amountText: {
    fontSize: 18,
    marginLeft: 30,
    marginBottom: 20,
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
  button: {
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 3,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 100,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    alignItems: 'center',
  },
});