import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './BottomTabNavigation';
import About from '../Screens/About';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Profile" component={About} />
    </Drawer.Navigator>
  );
}