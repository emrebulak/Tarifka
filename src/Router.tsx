import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Pages
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Kategoriler',
          headerTitleStyle: {
            color: '#FFA500'
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title: 'Yemekler',
          headerTitleStyle: {
            color: '#FFA500'
          },
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: 'Detay',
          headerTitleStyle: {
            color: '#FFA500'
          },
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;