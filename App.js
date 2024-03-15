import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './src/Routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}
