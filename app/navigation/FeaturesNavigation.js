import React, { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeFeatureNavigation from 'app/features/home/navigation';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function MenuIcon({ icon, iconType }) {
  const color = 'red';
  const size = 24;

  if (iconType === 'community') {
    return <CommunityIcon name={icon} size={size} color={color} />;
  }

  return <Icon name={icon} size={size} color={color} />;
}

function FeaturesNavigation() {
  const [screenOptions] = useState([
    {
      name: 'Home',
      title: 'Home',
      icon: 'home',
      iconType: 'default',
      component: HomeFeatureNavigation,
    },
  ]);
  const [isDrawerLoading, setDrawerLoading] = useState(true);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current) {
      setDrawerLoading(false);
    }

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: 'red',
      }}
      drawerStyle={styles.initialLoading(isDrawerLoading)}
      useNativeAnimations={false}>
      {screenOptions.map((screen, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={{
              drawerIcon: () => (
                <MenuIcon icon={screen.icon} iconType={screen.iconType} />
              ),
              title: screen.title,
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  initialLoading: (loading) => ({
    width: loading ? 0 : 280,
  }),
});

export default FeaturesNavigation;
