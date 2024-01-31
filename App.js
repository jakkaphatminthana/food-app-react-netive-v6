import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ResultShowScreen from "./src/screens/result_show_screen";
import SearchScreen from "./src/screens/search_screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Business Search",
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="ResultShow" component={ResultShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


///Changed Log (v4 -> v6)
/*
(1) ResultShowScreen
(2) ResultsList
*/


///Changed Log (App.js)
/*
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/search_screen";
import ResultShowScreen from "./src/screens/result_show_screen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
*/