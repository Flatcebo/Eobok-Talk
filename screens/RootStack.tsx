import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';
import SearchScreen from './SearchScreen';
import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
} from 'react-native';
import AddFriendModal from './AddFriendModal';

import {
  PreventRemoveProvider,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {
  CloseButton,
  DrawerMenuButton,
  SearchModalButton,
  SubmitButton,
} from '../components/AllButtons';
import AddHPScreen from './AddHPScreen';
import AddIDScreen from './AddIDScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingScreen from './SettingScreen';
import FriendSettingModal from './FriendSettingModal';
import FriendModifyScreen from './FriendModifyScreen';
import FriendManageScreen from './FriendManageScreen';
import FriendHideScreen from './FriendHideScreen';
import FriendBlockScreen from './FriendBlockScreen';
import ChatRoomScreen from './ChatRoomScreen';

import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {Text} from 'react-native-paper';
import ChatImgVidScreen from './ChatImgVidScreen';
import InChatRoomSetting from './InChatRoomSetting';
import {useEffect, useLayoutEffect, useState} from 'react';
import BorderInput from '../components/BorderInput';
import {SearchBar} from '@rneui/themed';
import ChatsNewRoomScreen from './ChatsNewRoomScreen';
import {
  ChatRoomSettingModal,
  ChatRoomStackModal,
  LongPressModal,
} from '../components/AllModals';
import ChatRoomModify from './ChatRoomModify';
import SeeMoreSetting from './SeeMoreSetting';
import MyAccountScreen from './MyAccountScreen';
import MyPrivacyScreen from './MyPrivacyScreen';
import MyNotificationScreen from './MyNotificationScreen';
// import {ChatRoomSearchBarModal} from '../components/AllModals';

type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Search: RootStackParamList | undefined;
  Friends: RootStackNavigationProp | undefined;
  Setting: RootStackParamList | undefined;
  AddFriendModal: RootStackParamList | undefined;
  FriendSettingModal: RootStackParamList | undefined;
  FriendModify: RootStackParamList | undefined;
  FriendManage: RootStackParamList | undefined;
  FriendHide: RootStackParamList | undefined;
  FriendBlock: RootStackParamList | undefined;
  ChatRoom: RootStackParamList | undefined;
  ChatRoomDrawer: RootStackParamList | undefined;
  ChatImgVid: RootStackParamList | undefined;
  InChatRoomSetting: RootStackParamList | undefined;
  NewChats: RootStackParamList | undefined;
  ChatRoomSettingModal: RootStackParamList | undefined;
  ChatRoomModify: RootStackParamList | undefined;
  ChatRoomStackModal: RootStackParamList | undefined;
  AddHP: RootStackParamList | undefined;
  AddID: RootStackParamList | undefined;
  SeeMoreSetting: RootStackParamList | undefined;
  MyAccount: RootStackParamList | undefined;
  MyPrivacy: RootStackParamList | undefined;
  MyNotification: RootStackParamList | undefined;
  LongPressModal: RootStackParamList | undefined;
};

type DrawerStackParamList = {
  ChatRoomDrawer: DrawerStackParamList | undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type DrawerStackNavigationProp =
  DrawerNavigationProp<DrawerStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [changeTopBar, setChangeTopBar] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isFocused = useIsFocused();

  // const backScreens = () => {
  //   if (modalVisible === true) {
  //     setModalVisible(false);
  //     backHandler.remove();
  //   } else if (setModalVisible(false) === undefined) {
  //     // navigation.pop();
  //     // backHandler.remove();
  //     // ('hi');
  //   }

  //   return true;
  // };
  // const backHandler = BackHandler.addEventListener(
  //   'hardwareBackPress',
  //   backScreens,
  // );

  // console.log(modalVisible, backHandler, backScreens);
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{headerShown: true, title: '설정'}}
        />
        <Stack.Screen
          name="FriendModify"
          component={FriendModifyScreen}
          options={{headerShown: true, title: '친구 편집'}}
        />
        <Stack.Screen
          name="FriendManage"
          component={FriendManageScreen}
          options={{headerShown: true, title: '친구 관리'}}
        />
        <Stack.Screen
          name="FriendHide"
          component={FriendHideScreen}
          options={{headerShown: true, title: '숨김친구 관리'}}
        />
        <Stack.Screen
          name="FriendBlock"
          component={FriendBlockScreen}
          options={{headerShown: true, title: '차단친구 관리'}}
        />
        <Stack.Screen
          name="InChatRoomSetting"
          component={InChatRoomSetting}
          options={{headerShown: true, title: '채팅방 설정'}}
        />
        <Stack.Screen
          name="ChatImgVid"
          component={ChatImgVidScreen}
          options={{
            headerRight: () => <CloseButton />,
            headerBackVisible: false,
            headerShown: true,
            title: '사진,동영상',
          }}
        />

        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{
            headerShown: true,
            title: '박쇼티',
            headerBackVisible: true,

            // IOS는 닫기 버튼 안먹음 - 이유는 헤더에 있는 버튼만 먹음.
            headerRight: () =>
              Platform.OS === 'android' ? (
                <Text>
                  <SearchModalButton />
                </Text>
              ) : undefined,
          }}
        />

        <Stack.Screen
          name="NewChats"
          component={ChatsNewRoomScreen}
          options={{
            headerShown: true,
            title: '대화상대 초대',
            headerRight: () => (
              <Pressable>
                <Text style={{fontSize: Platform.OS === 'android' ? 18 : 16}}>
                  확인
                </Text>
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="ChatRoomModify"
          component={ChatRoomModify}
          options={{
            headerShown: true,
            title: '채팅방 편집',
            headerRight: () => (
              <Pressable>
                <Text style={{fontSize: Platform.OS === 'android' ? 18 : 16}}>
                  모두 선택
                </Text>
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="AddID"
          component={AddIDScreen}
          options={{
            headerShown: true,
            title: 'ID로 추가',
            headerRight: () => <SubmitButton />,
          }}
        />
        <Stack.Screen
          name="AddHP"
          component={AddHPScreen}
          options={{
            headerShown: true,
            title: '전화번호로 추가',
            headerRight: () => <SubmitButton />,
          }}
        />
        <Stack.Screen
          name="SeeMoreSetting"
          component={SeeMoreSetting}
          options={{
            headerShown: true,
            title: '설정',
          }}
        />
        <Stack.Screen
          name="MyAccount"
          component={MyAccountScreen}
          options={{
            headerShown: true,
            title: '나의 계정',
          }}
        />
        <Stack.Screen
          name="MyPrivacy"
          component={MyPrivacyScreen}
          options={{
            headerShown: true,
            title: '개인/보안',
          }}
        />
        <Stack.Screen
          name="MyNotification"
          component={MyNotificationScreen}
          options={{
            headerShown: true,
            title: '알림',
          }}
        />
        <Stack.Group screenOptions={{}}>
          {/* 친구 추가 모달 백그라운드 터치시 종료 가능하게 만들기 */}
          <Stack.Screen
            name="AddFriendModal"
            component={AddFriendModal}
            options={{
              headerTitle: '친구 추가',
              presentation: 'transparentModal',
              contentStyle: {backgroundColor: '#00000041'},
              headerLeft:
                Platform.OS === 'android' ? undefined : () => <CloseButton />,
            }}
          />
          <Stack.Screen
            name="FriendSettingModal"
            component={FriendSettingModal}
            options={{
              headerShown: false,
              presentation: 'containedTransparentModal',
              // contentStyle: {backgroundColor: '#fffffff'},
            }}
          />
          <Stack.Screen
            name="ChatRoomSettingModal"
            component={ChatRoomSettingModal}
            options={{
              headerShown: false,
              presentation: 'containedTransparentModal',
              // contentStyle: {backgroundColor: '#fffffff'},
            }}
          />
          <Stack.Screen
            name="ChatRoomStackModal"
            component={ChatRoomStackModal}
            options={{
              headerShown: false,
              presentation: 'containedTransparentModal',
            }}
          />
          <Stack.Screen
            name="LongPressModal"
            component={LongPressModal}
            options={{
              headerShown: false,
              presentation: 'containedTransparentModal',
              // contentStyle: {backgroundColor: '#fffffff'},
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
