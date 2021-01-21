import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { useDispatch } from 'react-redux';
import * as loginActions from '../../login/redux/actions';
import styles from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button title="Logout" type="clear" onPress={() => onLogout} />
    </View>
  );
}
