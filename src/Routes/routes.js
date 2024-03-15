import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Feed from '../screens/feed';
import About from '../screens/about';
import Blog from '../screens/blog';
import Info1 from '../screens/info1';
import Info2 from '../screens/info2';

import { Ionicons } from '@expo/vector-icons';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <TabBottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FF0000",
        tabBarInactiveTintColor: "#000000",
      }}
    >

      <TabBottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='home' size=
                {size} color={color} />;
            }
            return <Ionicons name='home-outline' size=
              {size} color={color} />;
          },
        }}
      />

      <TabBottom.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "produtos",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='newspaper' size=
                {size} color={color} />;
            }
            return <Ionicons name='newspaper-outline' size=
              {size} color={color} />;
          },
        }}
      />


      <TabBottom.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "Sobre",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='information-circle' size=
                {size} color={color} />;
            }
            return <Ionicons name='information-circle-outline' size=
              {size} color={color} />;
          },
        }}
      />
    </TabBottom.Navigator>
  );
}
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Inicio'
        component={TabBottomRoutes}
        options={{
          drawerLabel: 'Inicio',
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color}
              name='home' />
          )
        }}
      />
      <Drawer.Screen
        name='Blog'
        component={StackRoutes}
        options={{
          drawerLabel: 'Blog',
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color}
              name='archive' />
          )
        }}

      />
    </Drawer.Navigator>

  );
}
const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='blog' component={Blog} />
      <Stack.Screen name='info1' component={Info1} />
      <Stack.Screen name='info2' component={Info2} />
    </Stack.Navigator>
  );
}
