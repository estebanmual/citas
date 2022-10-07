import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Cita = ({item}) => {
  const {paciente, fecha} = item;

  const formatearFecha = date => {
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    console.log(date);
    console.log(date.toLocaleDateString('es-ES', opciones));
    return date.toLocaleDateString('es-ES', opciones);
  };

  return (
    <View>
      <Text>{paciente}</Text>
      <Text>{formatearFecha(fecha)}</Text>
    </View>
  );
};

export default Cita;
