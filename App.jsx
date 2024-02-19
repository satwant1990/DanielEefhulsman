import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import WelcomeScreen from './Screens/WelcomeScreen';
import Home from './Screens/Home';
import AddForm from './Screens/AddForm';

function App() {
  return (
    <>
      <NavigationContainer initialRouteName=''>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="AddForm"
            component={AddForm}
            options={{
              headerShown: true,
              title: "Add Form Screen Title",
              headerStyle: {
                backgroundColor: '#FDBF60'
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App