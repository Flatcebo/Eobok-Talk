import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatsScreen from './ChatsScreen';
import FeedsScreen from './FeedsScreen';
import FriendsScreen from './FriendsScreen';
import {DrawerStackNavigationProp, RootStackNavigationProp} from './RootStack';
import SeeMoreScreen from './SeeMoreScreen';

type MainTabParamList = {
  친구: undefined;
  Friends: undefined;
  Chats: any;
  Feeds: any;
  SeeMore: any;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="친구">
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={24} />
          ),
          tabBarBadge: 30,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{tabBarBadge: 10, headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{tabBarBadge: 10, headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="SeeMore"
        component={SeeMoreScreen}
        options={{tabBarBadge: 10, headerShown: false, tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
