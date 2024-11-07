import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Linking from 'react-native/Libraries/Linking/Linking';
import workers from '../data/workers'; // Datos de trabajadores

const HomeScreen = () => {
  const navigation = useNavigation(); // Para navegar entre pantallas

  // Función para realizar llamadas
  const makeCall = (phone) => {
    Linking.openURL(`tel:${phone}`).catch((err) => console.error('Error al realizar la llamada:', err));
  };

  // Renderiza cada tarjeta de trabajador
  const renderWorker = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Detail', { worker: item })} // Navega a DetailScreen
    >
      {/* Imagen del trabajador */}
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.details}>
        {/* Nombre del trabajador */}
        <Text style={styles.name}>{item.name}</Text>
        {/* Enlace "Ver detalles" */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Detail', { worker: item })}
        >
          <Text style={styles.link}>Ver detalles</Text>
        </TouchableOpacity>
      </View>
      {/* Botones de acción */}
      <View style={styles.actions}>
        {/* Botón de llamada */}
        <TouchableOpacity style={styles.phoneIcon} onPress={() => makeCall(item.phone)}>
          <Ionicons name="call-outline" size={24} color="#8a5c9f" />
        </TouchableOpacity>
        {/* Botón de información */}
        <TouchableOpacity
          style={styles.detailsIcon}
          onPress={() => navigation.navigate('Detail', { worker: item })}
        >
          <Ionicons name="information-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Lista de trabajadores */}
      <FlatList data={workers} keyExtractor={(item) => item.id} renderItem={renderWorker} />
    </View>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    backgroundColor: '#f0f0f5', 
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    marginRight: 15, 
    borderWidth: 1, 
    borderColor: '#ddd' 
  },
  details: { 
    flex: 1,
  },
  name: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#333', 
  },
  link: { 
    fontSize: 14, 
    color: '#007BFF', 
    marginTop: 4, 
    textDecorationLine: 'underline',
  },
  actions: { 
    flexDirection: 'row', 
  },
  phoneIcon: {
    marginRight: 15,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#f7e6ff',
  },
  detailsIcon: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#e6f8e6',
  },
});

export default HomeScreen;
