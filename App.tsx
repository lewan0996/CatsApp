import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CatsList } from './src/components/CatsList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CatDetails } from './src/components/CatDetails';
import { RootStackParamList } from './src/types';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="cats">
          <Stack.Screen name="cats" component={CatsList} />
          <Stack.Screen name="catDetails" component={CatDetails} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
