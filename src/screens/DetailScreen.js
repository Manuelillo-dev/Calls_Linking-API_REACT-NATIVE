import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Linking from 'react-native/Libraries/Linking/Linking';

const DetailScreen = ({ route }) => {
  const { worker } = route.params; // Obtiene los datos del trabajador seleccionado

  // Función para realizar llamadas
  const makeCall = () => {
    Linking.openURL(`tel:${worker.phone}`).catch((err) => console.error('Error al realizar la llamada:', err));
  };

  return (
    <View style={styles.container}>
      {/* Imagen del trabajador */}
      <Image source={worker.image} style={styles.avatar} />
      {/* Nombre */}
      <Text style={styles.name}>{worker.name}</Text>
      {/* Sección de Perfil */}
      <Text style={styles.sectionTitle}>PERFIL</Text>
      <Text style={styles.text}>📞 Teléfono: {worker.phone}</Text>
      <Text style={styles.text}>📍 Procedencia: {worker.location}</Text>
      {/* Información adicional */}
      <Text style={styles.sectionTitle}>ACERCA DE MÍ</Text>
      <Text style={styles.text}>{worker.about}</Text>
      {/* Botón de llamada */}
      <TouchableOpacity style={styles.callButton} onPress={makeCall}>
        <Ionicons name="call-outline" size={24} color="#fff" />
        <Text style={styles.callButtonText}>Llamar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#ffffff' 
  },
  avatar: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    alignSelf: 'center', 
    marginBottom: 20, 
    borderWidth: 2, 
    borderColor: '#8a5c9f' 
  },
  name: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#4caf50', 
    marginBottom: 20, 
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 20, 
    color: '#555' 
  },
  text: { 
    fontSize: 16, 
    marginTop: 10, 
    color: '#333', 
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8a5c9f',
    padding: 15,
    borderRadius: 50,
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  callButtonText: { 
    color: '#fff', 
    marginLeft: 10, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default DetailScreen;
