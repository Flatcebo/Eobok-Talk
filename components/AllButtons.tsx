import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  Image,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import {FadeIn, FadeOut} from 'react-native-reanimated';

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp} from '../screens/RootStack';
import {ChatRoomDrawerModal} from './AllModals';
import BorderInput from './BorderInput';
//----------------------------------------------------------------------CloseButton-----------------------------------------------------------------------------------
export function CloseButton() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Icon
      name="close"
      size={26}
      onPress={() => {
        navigation.pop();
      }}
    />
  );
}
//----------------------------------------------------------------------SubmitButton-----------------------------------------------------------------------------------
export function SubmitButton() {
  return <Icon name="check" size={26} style={{color: 'black'}} />;
}
//----------------------------------------------------------------------HideButton-----------------------------------------------------------------------------------
export function HideButton() {
  return <Text>숨김</Text>;
}
//----------------------------------------------------------------------BlockButton-----------------------------------------------------------------------------------
export function BlockButton() {
  return <Text>차단</Text>;
}
//----------------------------------------------------------------------RefreshButton-----------------------------------------------------------------------------------
export function RefreshButton({style, size}: any) {
  return (
    <Pressable style={style}>
      <Text>
        <Icon name="refresh" size={size} />
      </Text>
    </Pressable>
  );
}
//----------------------------------------------------------------------DrawerMenuButton-----------------------------------------------------------------------------------
export function DrawerMenuButton() {
  // Platform.OS === 'android' ? StatusBar.setTranslucent(true) : null;
  // StatusBar.setBarStyle('dark-content');
  const navigation = useNavigation<RootStackNavigationProp>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const ClosedModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text>
        <Icon
          name="menu"
          size={30}
          color="black"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </Text>
      <ChatRoomDrawerModal
        visible={modalVisible}
        onPress={() => {
          if (navigation.push('ChatImgVid') === undefined) {
            ClosedModal();
          }
        }}
        onPressBackClose={ClosedModal}
        onPressSettingIcon={() => {
          if (navigation.push('InChatRoomSetting') === undefined) ClosedModal();
        }}
        onRequestClose={ClosedModal}
      />
    </View>
  );
}
//----------------------------------------------------------------------SearchModalButton-----------------------------------------------------------------------------------
export function SearchModalButton() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const ClosedModal = () => {
    setModalVisible(false);
  };
  const navigation = useNavigation<RootStackNavigationProp>();

  const backScreens = () => {
    if (modalVisible === true) {
      setModalVisible(false);
      backHandler.remove();
    } else if (setModalVisible(false) === undefined) {
      navigation.pop();
    }

    return true;
  };
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backScreens,
  );

  console.log(modalVisible);
  return (
    <>
      <View style={{}}>
        <Text>
          {/* <Icon
              name="search"
              size={30}
              onPress={() => {
                setModalVisible(true);
              }}
            /> */}
          <SearchButtons />
          <DrawerMenuButton />
        </Text>
      </View>
    </>
  );
}
export function SearchButtons() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<RootStackNavigationProp>();

  const backScreens = () => {
    if (modalVisible === true) {
      setModalVisible(false);
      backHandler.remove();
    } else if (setModalVisible(false) === undefined) {
      navigation.pop();
    }

    return true;
  };
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backScreens,
  );
  // 검색창 오픈시 바로 아래에 보이지 않는 50px정도의 공간이 생기는듯함 스크롤 안됨
  return (
    <>
      {modalVisible ? (
        <View
          style={{
            width: Platform.OS === 'android' ? 380 : 400,
            height: 55,
            backgroundColor: 'white',
            position: Platform.OS === 'android' ? 'absolute' : 'absolute',
            justifyContent: 'center',
            top: Platform.OS === 'android' ? undefined : '-30%',
            right: Platform.OS === 'android' ? undefined : -10,
            zIndex: 1,
            borderWidth: 1,
            // flexDirection: 'row',
          }}>
          <View
            style={{
              height: Platform.OS === 'android' ? undefined : '100%',
              // borderWidth: 1,
              // zIndex: 1,
            }}>
            <BorderInput
              keyboardType="default"
              placeholder="대화 내용 입력"
              autoFocus
              style={{
                // position: 'absolute',
                width: Platform.OS === 'android' ? '70%' : '70%',
                height: Platform.OS === 'android' ? undefined : 40,
                top: Platform.OS === 'android' ? undefined : '-100%',
                left: Platform.OS === 'android' ? undefined : '-4%',
                marginLeft: '18%',
                paddingLeft: Platform.OS === 'android' ? undefined : '2%',
                borderRadius: Platform.OS === 'android' ? undefined : 30,
                backgroundColor:
                  Platform.OS === 'android' ? undefined : '#f4f0f0b6',
                fontSize: 18,
                borderWidth: 1,
              }}
            />
            {/* </View> */}
            <Pressable
              style={{
                position: 'absolute',
                top: Platform.OS === 'android' ? undefined : '25%',
                left: Platform.OS === 'android' ? '7.5%' : '4.5%',
                // borderWidth: 1,
              }}>
              <Text>
                {/* onPress IOS 안됨 */}
                <Icon
                  name="close"
                  size={26}
                  onPress={() => {
                    setModalVisible(false);
                    // console.log('ok');
                  }}
                />
              </Text>
            </Pressable>
            <Pressable
              style={{
                position: 'absolute',
                // top: Platform.OS === 'android' ? undefined : '20%',
                right: Platform.OS === 'android' ? undefined : '1%',
                justifyContent: 'center',
                paddingVertical: '3%',
                zIndex: 1,
              }}>
              <Text>
                {Platform.OS === 'android' ? undefined : (
                  <Icon
                    name="expand-less"
                    size={30}
                    onPress={() => {
                      // setModalVisible(false);
                      // console.log('ok');
                    }}
                  />
                )}

                {Platform.OS === 'android' ? undefined : (
                  <Icon name="expand-more" size={30} />
                )}
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>
            <Icon
              name="search"
              size={30}
              onPress={() => {
                setModalVisible(true);
              }}
            />
          </Text>
        </View>
      )}
    </>
  );
}

export function FloatingButton() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const onOpenButtons = () => {
    // const fadeAnim = useRef(new Animated.Value(0)).current;
    // Animated.spring(fadeAnim, {
    // toValue: 1,
    // useNativeDriver: true,
    // }).start();
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible ? (
        <View style={{flexDirection: 'row', height: 55}}>
          <Pressable
            style={{
              position: 'absolute',
              right: 8,
              borderRadius: 100,
              backgroundColor: 'skyblue',
              margin: 8,
              padding: 6,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}>
              <Icon name="close" size={30} />
            </Pressable>
            <SearchButtons />
            <DrawerMenuButton />
          </Pressable>
        </View>
      ) : (
        <Pressable
          style={{
            position: 'absolute',
            right: 8,
            borderRadius: 100,
            backgroundColor: 'skyblue',
            margin: 8,
            padding: 6,
            flexDirection: 'row',
            borderWidth: 1,
          }}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Icon name="add" size={30} />
        </Pressable>
      )}
    </>
  );
}
