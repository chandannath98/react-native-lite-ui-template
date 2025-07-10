import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './BottomTabNavigation';
import About from '../Screens/About';
import { useTheme } from 'react-native-lite-ui';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {

  const {colors}=useTheme()
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle:{
        backgroundColor:colors.backgroundColor

      },
      drawerLabelStyle:{
      color:colors.textColor,

      },
      drawerActiveTintColor:'white',
      drawerActiveBackgroundColor:colors.primary,
     headerStyle:{
      backgroundColor:colors.backgroundColor
     },
     headerTitleStyle:{
      color:colors.textColor,
      
     },
     headerTintColor:colors.textColor
    }}>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Profile" component={About} />
    </Drawer.Navigator>
  );
}