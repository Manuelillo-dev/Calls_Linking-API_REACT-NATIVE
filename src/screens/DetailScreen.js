import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const DetailScreen = ({ route }) => {
  const { worker } = route.params;
  const [profilePhoto, setProfilePhoto] = useState(worker.profilePhoto);

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
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              profilePhoto
                ? { uri: profilePhoto }
                : require('../../assets/default-profile.png')
            }
            style={styles.avatar}
          />
          <TouchableOpacity
            style={styles.cameraIconContainer}
            onPress={() =>
              Alert.alert('Opciones', 'Selecciona una acción', [
                { text: 'Cámara', onPress: openCamera },
                { text: 'Galería', onPress: openGallery },
                { text: 'Remover', onPress: removePhoto },
                { text: 'Cancelar', style: 'cancel' },
              ])
            }
          >
            <Ionicons name="camera-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    width: 120,
    height: 120,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#8a5c9f',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#8a5c9f',
    borderRadius: 15,
    padding: 5,
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
    color: '#555',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});

export default DetailScreen;
