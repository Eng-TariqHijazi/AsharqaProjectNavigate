import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Slider,BottomStack} from "./screens/";
import Detailes from "./screens/Detailes";
const Stack = createNativeStackNavigator();
export default function AppIndex(){
    return(
        <Stack.Navigator initialRouteName="Slider">
            <Stack.Screen options={{headerShown:false}} name="Slider" component={Slider}/>
            <Stack.Screen options={{headerShown:false}} name="BottomStack" component={BottomStack}/>
            <Stack.Screen options={{headerShown:false}} name="Detailes" component={Detailes}/>
        </Stack.Navigator>
    )
}