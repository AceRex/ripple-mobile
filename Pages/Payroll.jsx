import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Payroll = () => {
  return (
    <View style={styles.container}>
      <Text>Payroll</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Payroll;
