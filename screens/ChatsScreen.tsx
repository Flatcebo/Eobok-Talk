import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  BackHandler,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
import ChatsCard from '../components/ChatsCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp} from './RootStack';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChatRoomSettingModal} from '../components/AllModals';

const ChatsScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  Platform.OS === 'android'
    ? [
        StatusBar.setTranslucent(true),
        StatusBar.setBarStyle('dark-content'),
        StatusBar.setHidden(false),
      ]
    : StatusBar.setBarStyle('default');

  const backScreens = () => {
    BackHandler.exitApp();
    return true;
  };
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backScreens,
  );

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>채팅방</Text>
        <View style={styles.topIcons}>
          <Text>
            <Icon
              name="search"
              size={30}
              style={{color: 'black'}}
              onPress={() => {
                navigation.push('Search');
              }}
            />
          </Text>
          <Text>
            <Icon
              name="person-add-alt-1"
              size={30}
              style={{color: 'black'}}
              onPress={() => {
                navigation.push('NewChats');
              }}
            />
          </Text>
          <Text>
            <Icon
              name="settings"
              onPress={() => {
                navigation.push('ChatRoomSettingModal');
              }}
              size={28}
              style={{color: 'black'}}
            />
          </Text>
        </View>
      </View>

      <FlatList
        data={undefined}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <Pressable
              style={styles.chatList}
              android_ripple={{color: 'red'}}
              onPress={() => {
                navigation.push('ChatRoom');
              }}>
              <View>
                <ChatsCard>1</ChatsCard>
              </View>
            </Pressable>
            <ChatsCard>2</ChatsCard>
            <ChatsCard>3</ChatsCard>
            <ChatsCard>4</ChatsCard>
            <ChatsCard>5</ChatsCard>
            <ChatsCard>6</ChatsCard>
            <ChatsCard>7</ChatsCard>
            <ChatsCard>8</ChatsCard>
            <ChatsCard>9</ChatsCard>
            <ChatsCard>10</ChatsCard>
            <ChatsCard>11</ChatsCard>
            <ChatsCard>12</ChatsCard>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const renderItem = ({items}: any) => <ChatsCard post={items} />;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 2.3,
    color: 'black',
  },
  topIcons: {
    flexDirection: 'row',
    flex: Platform.OS === 'android' ? 0.75 : 0.8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal: {
    zIndex: 1,
    width: 320,
    height: 320,
  },
  whiteBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  chatList: {
    // height: '20%',
  },
});

export default ChatsScreen;
