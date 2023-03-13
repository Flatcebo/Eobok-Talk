import {useNavigation} from '@react-navigation/native';
import {Alert, Platform, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {RootStackNavigationProp} from './RootStack';

export default function FriendSettingModal() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.pop();
      }}
      style={styles.pressable}>
      <View style={styles.modalBack}>
        <Pressable
          onPress={() => {
            navigation.replace('FriendModify');
          }}>
          <Text style={[styles.text, {}]}>친구편집</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.replace('FriendManage');
          }}>
          <Text style={styles.text}>친구관리</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.text}>전체설정</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  modalBack: {
    alignItems: 'center',
    width: '29%',
    top: Platform.OS === 'android' ? '11%' : '11.5%',
    left: Platform.OS === 'android' ? '65.5%' : '65%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  pressable: {
    flex: 1,
  },
  text: {
    padding: Platform.OS === 'android' ? '6%' : '8%',
    fontWeight: 'bold',
    paddingHorizontal: '27%',
    // borderRadius: 0,
    // borderWidth: 1,
  },
});
