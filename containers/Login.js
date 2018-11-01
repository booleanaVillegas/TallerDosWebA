import * as React from 'react';
import { View, StyleSheet, ToastAndroid, Text, Image } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { stores } from '../stores';

@observer export class Login extends React.Component {
  @observable credenciales = {
    correo: 'j@j.com',
    contra: '123456',
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    ToastAndroid.show('iniciando...', ToastAndroid.SHORT);
    stores.auth.iniciarSesion(this.credenciales.correo, this.credenciales.contra);
  }

  render() {
    return (
      <View style={styles.container}>
          <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://static.thenounproject.com/png/632343-200.png'}}
        />
                 <FormLabel  labelStyle={styles.colorNegro}>Correo</FormLabel>
        <FormInput
          onChangeText={v => (this.credenciales.correo = v)}
          value={this.credenciales.correo}
          placeholder="tu correo electrónico"
        />

        <FormLabel labelStyle={styles.colorNegro}>Contraseña</FormLabel>
        <FormInput
          onChangeText={v => (this.credenciales.contra = v)}
          value={this.credenciales.contra}
          placeholder="•••••••"
          secureTextEntry
        />

        <Button
          buttonStyle={styles.button}
          title="Iniciar Sesión"
          large
          onPress={this.onSubmit}
        />


        {stores.auth.error && <Text>{stores.auth.error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#42d7f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  button: {
    backgroundColor: 'black',
    marginTop: 20,

  },
  colorNegro: {
    color: 'black'
  }
});
