import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const DetailScreen = ({ route }) => {
  const { worker } = route.params;
  const [profilePhoto, setProfilePhoto] = useState(worker.profilePhoto);

  // Abrir la cámara
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permiso requerido', 'Se requiere acceso a la cámara para tomar fotos.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  };

  // Abrir la galería
  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permiso requerido', 'Se requiere acceso a la galería para seleccionar fotos.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  };

  // Remover la foto
  const removePhoto = () => {
    Alert.alert(
      'Confirmar',
      '¿Estás seguro de que deseas remover esta foto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => setProfilePhoto(null),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Imagen de perfil */}
      <TouchableOpacity onPress={() => Alert.alert('Opciones', 'Selecciona una acción', [
        { text: 'Cámara', onPress: openCamera },
        { text: 'Galería', onPress: openGallery },
        { text: 'Remover', onPress: removePhoto },
        { text: 'Cancelar', style: 'cancel' },
      ])}>
        <Image
          source={
            profilePhoto
              ? { uri: profilePhoto }
              : require('../../assets/default-profile.png') // Imagen por defecto
          }
          style={styles.avatar}
        />
        <Ionicons
          name="camera-outline"
          size={24}
          color="#fff"
          style={styles.cameraIcon}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{worker.name}</Text>
      <Text style={styles.sectionTitle}>PERFIL</Text>
      <Text style={styles.text}>📞 Teléfono: {worker.phone}</Text>
      <Text style={styles.text}>📍 Procedencia: {worker.location}</Text>
      <Text style={styles.sectionTitle}>ACERCA DE MÍ</Text>
      <Text style={styles.text}>{worker.about}</Text>
    </View>
  );
};

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
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#8a5c9f',
    padding: 5,
    borderRadius: 15,
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
});

export default DetailScreen;
