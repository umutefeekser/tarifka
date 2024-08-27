import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{    
                headerTitleStyle: { color: "orange" },
                headerTitleAlign: "center",
                headerTintColor: "orange"
            }}>
                <Stack.Screen name="ProductsPage" component={Categories} options={{
                    title: "Categories"
                }}/>
                <Stack.Screen name="MealsPage" component={Meals} options={{
                    title: "Meals"
                }}/>
                <Stack.Screen name="DetailPage" component={Detail} options={{
                    title: "Detail"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;