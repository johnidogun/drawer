import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';


const HomeScreen = ({navigation}) => {

  return(
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <DrawerContentScrollView>

      <Button title='Drawer Page' onPress={()=> navigation.navigate('Notifications')}/>
    

      </DrawerContentScrollView>
      </View>


    

  );
}

const NotificationScreen = ({navigation})=>{

  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Button title='Click for  the net notification' onPress={()=> navigation.navigate('About')}/>

    </View>
  )
}

const AboutPage =({navigation})=>{
  return(
    <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
      
    </View>
  )
}

const Drawer = createDrawerNavigator();

const App =()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component ={HomeScreen}/>
        <Drawer.Screen name='Notifications' component={NotificationScreen}/>
        <Drawer.Screen name='About' component={NotificationScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;