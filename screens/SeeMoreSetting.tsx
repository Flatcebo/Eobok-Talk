import {useNavigation} from '@react-navigation/native';
import {Image} from '@rneui/base';
import {Platform, Pressable, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WidthLine} from '../components/WidthLine';
import {RootStackNavigationProp} from './RootStack';

const SeeMoreSetting = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View>
      <View style={{marginHorizontal: '5%'}}>
        <View style={{marginVertical: '5%'}}>
          <Text>나의 프로필</Text>
        </View>
        <View style={{}}>
          <View>
            <View
              style={{
                // borderWidth: 1,
                width: '100%',
                height: 60,
                flexDirection: 'row',
              }}>
              {/* 채팅방 정보 */}
              <View
                style={{
                  width: '85%',
                  height: '100%',
                  flexDirection: 'row',
                  //   borderWidth: 1,
                }}>
                <Image
                  style={{
                    backgroundColor: 'black',
                    width: 60,
                    height: 60,
                    // margin: '1.9%',
                    borderRadius: 15,
                  }}
                />
                <View
                  style={{
                    marginLeft: 12,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginBottom: Platform.OS === 'android' ? '2%' : '4%',
                      fontWeight: 'bold',
                      width: 200,
                    }}>
                    닉네임
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      width: 200,
                    }}>
                    +82 010-9595-9595
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <WidthLine style={{borderWidth: 0.2, marginVertical: 20}} />
      <View style={{marginHorizontal: '5%'}}>
        <Pressable
          onPress={() => {
            navigation.push('MyAccount');
          }}>
          <View
            style={{
              //   borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: '2%',
            }}>
            <Icon
              name="settings"
              size={40}
              color={'black'}
              style={{marginRight: '3%'}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              나의 계정
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.push('MyPrivacy');
          }}>
          <View
            style={{
              // borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: '2%',
            }}>
            <Icon
              name="settings"
              size={40}
              color={'black'}
              style={{marginRight: '3%'}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              개인/보안
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.push('FriendManage');
          }}>
          <View
            style={{
              // borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: '2%',
            }}>
            <Icon
              name="settings"
              size={40}
              color={'black'}
              style={{marginRight: '3%'}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              친구
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.push('MyNotification');
          }}>
          <View
            style={{
              // borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: '2%',
            }}>
            <Icon
              name="settings"
              size={40}
              color={'black'}
              style={{marginRight: '3%'}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              알림
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SeeMoreSetting;
