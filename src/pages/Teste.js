import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Teste(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={{ padding: 10, fontSize: 42 }}> Texto 1</Text>
            <Text style={{ padding: 10, fontSize: 42 }}> Texto 2</Text>
            <Text style={{ padding: 10, fontSize: 42 }}> Texto 3</Text>
            <Text style={{ padding: 10, fontSize: 42 }}> Texto 4</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
   
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
    },
    searchInput: {
       height: 100,
       backgroundColor: '#FFF',
       fontSize: 42,
    },
    
});

export default Teste;