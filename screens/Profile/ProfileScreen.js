import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile-image.jpg')} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Mnyika</Text>
      <Text style={styles.email}>johnmnyika@gmail.com</Text>
      <View style={styles.profileInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Posts</Text>
          <Text style={styles.infoValue}>789</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Followers</Text>
          <Text style={styles.infoValue}>123K</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Following</Text>
          <Text style={styles.infoValue}>456</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 50,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
