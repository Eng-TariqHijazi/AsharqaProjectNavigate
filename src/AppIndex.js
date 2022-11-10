import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomStack from "./navigator/BottomStack";
import {Slider} from "./screens/";
import Detailes from "./screens/Detailes";
const Stack = createNativeStackNavigator();
export default function AppIndex(){
    return(
        <Stack.Navigator initialRouteName="Slider">
            <Stack.Screen options={{headerShown:false,animation: "slide_from_right",}} name="Slider" component={Slider}/>
            <Stack.Screen options={{headerShown:false,animation: "slide_from_right",}} name="BottomStack" component={BottomStack}/>
            <Stack.Screen options={{headerShown:false,gestureEnabled:true}} name="Detailes" component={Detailes}/>
        </Stack.Navigator>
    )
}