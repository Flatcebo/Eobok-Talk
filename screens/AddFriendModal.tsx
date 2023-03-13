import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, View} from 'react-native';
import {Modal, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp} from './RootStack';

export default function AddFriendModal() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.layout}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace('AddID');
        }}>
        <View
          style={[
            styles.view,
            {borderRightWidth: 0.5, borderRightColor: '#9a9a9a63'},
          ]}>
          <Text style={styles.text}>
            <Icon name="assignment-ind" size={30} />
          </Text>
          <Text style={styles.text}>ID로 추가</Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace('AddHP');
        }}>
        <View style={styles.view}>
          <Text style={styles.text}>
            <Icon name="phone" size={30} />
          </Text>
          <Text style={styles.text}>전화번호로 추가</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    height: '100%',
  },
  view: {
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
    height: '100%',
  },
  text: {
    color: 'black',
    paddingTop: 6,
    fontSize: 12,
  },
});
