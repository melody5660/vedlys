/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import AttentionScreen from '../screens/AttentionScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import menuList from '../../data.json';
import { useTranslation } from 'react-i18next';
import MenuScreen from '../screens/MenuScreen';
import PageScreen from '../screens/PageScreen';
import FirstScreen from '../screens/FirstScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
//      <Stack.Screen name="Root" component={HomeScreen} options={{ headerShown: false }} />

function RootNavigator() {
  const { t } = useTranslation();
console.log('menulist', menuList.pages);
  return (
    <Stack.Navigator>
      <Stack.Screen key="homeScreen" name="Root" options={{title: `${t('title')}`}} >
        {(props) => <HomeScreen next="firstScreen" />}
      </Stack.Screen>
      <Stack.Screen key="firstScreen" name="firstScreen" options={{title: `${t('title')}`}} >
        {(props) => <FirstScreen />}
      </Stack.Screen>
      <Stack.Screen key="menuScreen" name="menuScreen" options={{title: `${t('menuScreen.title')}`}}>
        {(props) => <MenuScreen next="attentionScreen" />}
      </Stack.Screen>
      <Stack.Screen key="attentionScreen" name="attentionScreen" options={{title: `${t('attentionScreen.title')}`}}>
        {(props) => <AttentionScreen next={menuList.next} />}
      </Stack.Screen>
      <Stack.Screen name="NotFound" key="NOTFOUND" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      {
        menuList && menuList.pages.map((element: any) => <Stack.Screen key={element.pageId} name={element.pageId} options={{headerLeft: () => <></>, title: element.title}}>
          {(props) => <PageScreen element={element} />}
        </Stack.Screen>)
        
      }
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
