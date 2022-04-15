import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigatio from './src/navigation/Navigatio';

export default function App() {
  console.log('Esto es un rebase');

  return (
    <NavigationContainer>
      <Navigatio/>
    </NavigationContainer>    
  );
}
