import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import About from '../Screens/About';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useTheme } from 'react-native-lite-ui';
const Tab = createBottomTabNavigator();

export default function MyTabs() {

    const {colors} =useTheme()

  return (
    <Tab.Navigator>
      <Tab.Screen 
      options={{
        headerShown:false,
        tabBarIcon:(props)=><AntDesign size={24} color={props.focused?colors?.primary:"gray"} name="home" />,
        tabBarActiveTintColor:colors.primary
      }}
      name="Home" component={Home} />
      <Tab.Screen
      
      options={{
        headerShown:false,
        tabBarIcon:(props)=><AntDesign size={24} color={props.focused?colors?.primary:"gray"} name="infocirlceo" />,
        tabBarActiveTintColor:colors.primary
      }}
      name="About" component={About} />
    </Tab.Navigator>
  );
}