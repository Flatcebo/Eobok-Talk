import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Alert,
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
    <View>
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
      {modalVisible ? (
        <View
          style={{
            width: 400,
            height: 55,
            backgroundColor: 'white',
            position: 'absolute',
            justifyContent: 'center',
          }}>
          <View style={{}}>
            <BorderInput
              keyboardType="default"
              placeholder="대화 내용 입력"
              autoFocus
              style={{
                // borderWidth: 1,
                marginLeft: '18%',
                width: '70%',
                fontSize: 18,
              }}
            />
          </View>
          <Text style={{position: 'absolute', left: '4.8%'}}>
            <Icon
              name="close"
              size={26}
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </Text>
          {/* <View>
            <View
              style={{
                borderWidth: 1,
                height: 100,
                width: 390,
                position: 'absolute',
                bottom: 50,
              }}></View>
          </View> */}
        </View>
      ) : (
        <View>
          <Text>
            <Icon
              name="search"
              size={30}
              onPress={() => {
                setModalVisible(true);
              }}
            />
            <DrawerMenuButton />
          </Text>
        </View>
      )}
    </>
  );
}
