import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import List from "../screens/HomeList/List";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function BottomStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "الرئيسية",
        }}
        name="List"
        component={List}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="phone"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "تواصل معنا",
        }}
        name="About"
        component={Contact}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="infocirlce"
              size={24}
              color={focused ? "black" : "#00000050"}
            />
          ),
          tabBarLabel: "من نحن",
        }}
        name="Contact"
        component={About}
      />
    </Tab.Navigator>
  );
}
