import {Platform, View} from 'react-native';
import {Switch, Text} from 'react-native-paper';

const MyNotificationScreen = () => {
  return (
    <View style={{marginHorizontal: '5%'}}>
      <View style={{marginVertical: '5%'}}>
        <Text style={{fontSize: 12}}>새 메시지 알림</Text>
      </View>
      <View
        style={{
          //   borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: '2%',
        }}>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 18 : 20,
            fontWeight: Platform.OS === 'android' ? 'bold' : '500',
          }}>
          메시지 알림
        </Text>
        <Switch />
      </View>
      <View
        style={{
          //   borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: '2%',
        }}>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 18 : 20,
            fontWeight: Platform.OS === 'android' ? 'bold' : '500',
          }}>
          소리
        </Text>
        <Switch />
      </View>
      <View
        style={{
          //   borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: '2%',
        }}>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 18 : 20,
            fontWeight: Platform.OS === 'android' ? 'bold' : '500',
          }}>
          진동
        </Text>
        <Switch />
      </View>
    </View>
  );
};

export default MyNotificationScreen;
