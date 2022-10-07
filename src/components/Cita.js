import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import moment from 'moment/moment';

const Cita = ({item, index}) => {
  const {paciente, fecha} = item;
  const formatearFecha = date => {
    return moment(date).format('LLLL');
  };

  return (
    <View
      style={
        index === 0
          ? styles.contenedor
          : [styles.contenedor, {borderTopColor: '94A3B8', borderTopWidth: 1}]
      }>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

      <View style={styles.contenedorBotones}>
        <Pressable style={[styles.btn, styles.btnEditar]}>
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#6D28D9',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#f59e0b',
  },
  btnEliminar: {
    backgroundColor: '#ef4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#fff',
    fontSize: 12,
  },
});

export default Cita;
