import {Image, Platform, Pressable, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatRoomModify = () => {
  return (
    <View>
      <View style={{marginHorizontal: '5%'}}>
        <View style={{marginVertical: '5%'}}>
          <Text>채팅방</Text>
        </View>
        <View style={{}}>
          <FlatList
            style={{
              width: '100%',
              height: Platform.OS === 'android' ? '90%' : '92%',
              // borderWidth: 1,
            }}
            data={null}
            renderItem={null}
            ListHeaderComponent={
              <View>
                <View
                  style={{
                    //   borderWidth: 1,
                    width: '100%',
                    height: 60,
                    flexDirection: 'row',
                  }}>
                  {/* 라디오 버튼 */}
                  <View
                    style={{
                      width: '10%',
                      height: '100%',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name="brightness-low"
                      size={26}
                      style={
                        {
                          //   flex: Platform.OS === 'android' ? 1 : 1,
                          //   right: Platform.OS === 'android' ? undefined : '20%',
                        }
                      }
                    />
                  </View>
                  {/* 채팅방 정보 */}
                  <View
                    style={{
                      width: '85%',
                      height: '100%',
                      marginBottom: '5%',
                      flexDirection: 'row',
                      // borderWidth: 1,
                    }}>
                    <Image
                      style={{
                        backgroundColor: 'black',
                        width: '15%',
                        height: '80%',
                        margin: '1.9%',
                        borderRadius: 15,
                      }}
                    />
                    <View style={{}}>
                      <Text
                        style={{
                          fontSize: 12,
                          marginTop: '5%',
                          marginBottom: '3%',
                          fontWeight: 'bold',
                          width: 200,
                        }}>
                        대화방 이름
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          width: 200,
                        }}>
                        최근 대화 내용
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            }
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 60,
          bottom: Platform.OS === 'android' ? '-0.8%' : '-1.7%',
          paddingTop: '4.5%',
          backgroundColor: 'white',
          flexDirection: 'row',
          //   alignItems: 'center',
          //   borderWidth: 1,
        }}>
        <Pressable style={{flex: 1}}>
          <Text style={{textAlign: 'center'}}>읽음 처리</Text>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <Text style={{textAlign: 'center'}}>나가기</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatRoomModify;
