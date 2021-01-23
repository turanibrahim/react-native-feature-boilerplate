import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../../../store/modules/user/actions';
import styles from './styles';

export default function Login() {
  const id = useSelector(state => state.authReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login Status : {id}</Text>
      <Button title="Login" type="clear" onPress={onLogin} />
    </View>
  );
}
