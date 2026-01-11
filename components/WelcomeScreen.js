import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();

  const effectiveIsLight = colorScheme === 'dark';
  const palette = effectiveIsLight
    ? { background: '#EDEFEE', text: '#333333', accent: '#EE9972' }
    : { background: '#333333', text: '#EDEFEE', accent: '#EE9972' };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: palette.background }]}
    >
      <View style={styles.headerWrapper}>
        <Text style={[styles.headerText, { color: palette.text }]}>
          My Bistro
        </Text>
      </View>

      <Text style={[styles.regularText, { color: palette.text }]}>
        My Bistro est une application de démonstration permettant d’explorer
        l’adaptation automatique du thème clair/sombre dans React Native.
      </Text>
      

      <View
        style={[styles.accentBar, { backgroundColor: palette.accent }]}
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerWrapper: {
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
  },
  regularText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  accentBar: {
    height: 8,
    marginHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
  debugText: {
  fontSize: 14,
  textAlign: 'center',
  opacity: 0.7,
},

});
