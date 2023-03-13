import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  FlatList,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BlockButton, HideButton} from '../components/AllButtons';
import ProfilesCard from '../components/ProfilesCard';
import {WidthLine} from '../components/WidthLine';
import {RootStackNavigationProp} from './RootStack';

Platform.OS === 'android'
  ? StatusBar.setTranslucent(true)
  : StatusBar.setBarStyle('default');

const FriendScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const PushSearchScreen = () => {
    navigation.push('Search');
  };
  const PushFriendSettingModal = () => {
    navigation.push('FriendSettingModal');
  };

  return (
    <SafeAreaView>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>친구</Text>
        <View style={styles.topIcons}>
          <Pressable onPress={PushSearchScreen}>
            <Text>
              <Icon name="search" size={30} style={{color: 'black'}} />
            </Text>
          </Pressable>
          {/* 친구 추가 모달 및 아이콘 */}
          <Pressable
            onPress={() => {
              navigation.push('AddFriendModal');
            }}>
            <Text>
              <Icon
                name="person-add-alt-1"
                size={30}
                style={{color: 'black'}}
              />
            </Text>
          </Pressable>
          <View>
            <Modal
              statusBarTranslucent={false}
              visible={modalVisible}
              transparent={true}
              presentationStyle="overFullScreen"
              style={{}}>
              <Pressable
                style={{flex: 1, backgroundColor: '#00000052'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Pressable style={styles.addTopBar}>
                  <View>
                    <Text style={{fontSize: 20}}>
                      <Pressable>
                        <Icon name="search" size={30} />
                      </Pressable>
                      친구추가
                    </Text>
                  </View>
                </Pressable>
                <View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: 100,
                    flexDirection: 'row',
                  }}>
                  <Pressable style={styles.addButton}>
                    <Text>Phone</Text>
                  </Pressable>
                  <Pressable style={styles.addButton}>
                    <Text>ID</Text>
                  </Pressable>
                </View>
              </Pressable>
            </Modal>
          </View>
          <Pressable onPress={PushFriendSettingModal}>
            <Text>
              <Icon name="settings" size={28} style={{color: 'black'}} />
            </Text>
          </Pressable>
        </View>
      </View>
      <ProfilesCard borderBottomLine>존예녀</ProfilesCard>
      <WidthLine style={styles.borderBottom} />
      <FlatList
        data={undefined}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <ProfilesCard>1</ProfilesCard>

            <ProfilesCard>2</ProfilesCard>
            <ProfilesCard>3</ProfilesCard>
            <ProfilesCard>4</ProfilesCard>
            <ProfilesCard>5</ProfilesCard>
            <ProfilesCard>6</ProfilesCard>
            <ProfilesCard>7</ProfilesCard>
            <ProfilesCard>8</ProfilesCard>
            <ProfilesCard>9</ProfilesCard>
            <ProfilesCard>10</ProfilesCard>
            <ProfilesCard>11</ProfilesCard>
            <ProfilesCard>12</ProfilesCard>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const renderItem = ({items}: any) => <ProfilesCard post={items} />;
const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 2.7,
    color: 'black',
  },
  topIcons: {
    flexDirection: 'row',
    flex: 1,
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
  addTopBar: {
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    top: Platform.OS === 'android' ? 0 : 40,
    borderWidth: 1,
  },
  addButton: {
    borderWidth: 1,
    backgroundColor: 'white',
    top: Platform.OS === 'android' ? 100 : 200,
  },
  borderBottom: {
    width: '90%',
    borderBottomWidth: 0.6,
    borderColor: '#9a9a9a',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default FriendScreen;
