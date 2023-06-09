import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp} from '../screens/RootStack';

export function ChatRoomDrawerModal({
  visible,
  onRequestClose,
  onPress,
  onPressBackClose,
  onPressSettingIcon,
}: any) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <ScrollView>
      <View>
        <Modal
          visible={visible}
          transparent={true}
          animationType="fade"
          statusBarTranslucent={false}
          onRequestClose={onRequestClose}
          presentationStyle="overFullScreen">
          <Pressable
            style={{
              flex: 1,
              backgroundColor: '#00000001',
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPressBackClose}>
            <Pressable style={styles.viewLayout}>
              <View style={styles.viewMarginHorizontal}>
                <View style={styles.viewHeader}>
                  <Text style={styles.textHeader}>채팅방 메뉴</Text>
                </View>
                <View style={{}}>
                  <Pressable onPress={onPress}>
                    <View style={styles.viewImgBar}>
                      <Icon name="photo" size={24} color={'black'} />
                      <Text style={{fontSize: 14}}>사진,동영상</Text>

                      <Icon
                        name="keyboard-arrow-right"
                        size={24}
                        style={{
                          position: 'absolute',
                          right: '0%',
                          color: 'black',
                        }}
                      />
                    </View>
                  </Pressable>

                  <ScrollView
                    // style={styles.viewIMGScroll}
                    scrollEnabled={true}
                    pagingEnabled={true}
                    // snapToStart={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    <View style={styles.images}>
                      {/* <Text style={[styles.textSubTitle, styles.image]}>
                      IMAGE
                    </Text> */}
                      <Image
                        style={[styles.image]}
                        source={{
                          uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />
                      <Image
                        style={[styles.image]}
                        source={{
                          uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />
                      <Image
                        style={[styles.image]}
                        source={{
                          uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />
                      <Image
                        style={[styles.image]}
                        source={{
                          uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />
                      <Image
                        style={[styles.image]}
                        source={{
                          uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />
                      <Image
                        style={[styles.image]}
                        source={{
                          uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                        }}
                        resizeMode="contain"
                        resizeMethod="resize"
                      />
                    </View>
                  </ScrollView>
                </View>
                {/* <View style={{}}>
                  <Text style={styles.textSubTitle}>톡 게시판</Text>
                </View> */}
                <View style={{}}>
                  <Text
                    style={[
                      styles.textSubTitle,
                      {marginBottom: '3%', fontWeight: 'bold'},
                    ]}>
                    대화상대
                  </Text>
                  <View style={styles.viewProfile}>
                    <Image
                      style={[styles.imageProfile]}
                      source={{
                        uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                      }}
                      resizeMode="cover"
                      resizeMethod="resize"
                    />
                    <Text style={[styles.profile]}>Person</Text>
                  </View>
                  <View style={styles.viewProfile}>
                    <Image
                      style={[styles.imageProfile]}
                      source={{
                        uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                      }}
                      resizeMode="cover"
                      resizeMethod="resize"
                    />
                    <Text style={[styles.profile]}>Person</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.viewBottomBar]}>
                <View style={styles.viewInlineBottomBar}>
                  <View style={styles.viewBottomBarIcon}>
                    <Pressable>
                      <Icon
                        name="input"
                        size={32}
                        color={'black'}
                        onPress={() => {
                          Alert.alert('채팅방을 나가시겠습니까?', '', [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Calcel Passed'),
                              style: 'cancel',
                            },
                            {
                              text: 'OK',
                              onPress: () => {
                                navigation.pop();
                              },
                              // style: ''
                            },
                          ]);
                        }}
                      />
                    </Pressable>
                  </View>
                  <View style={styles.viewBottomBarIcon}>
                    <Pressable>
                      <Icon
                        name="notifications-off"
                        size={32}
                        color={'black'}
                      />
                    </Pressable>
                    <Pressable>
                      <Icon name="star-border" size={32} color={'black'} />
                    </Pressable>
                    <Pressable>
                      <Icon
                        name="settings"
                        size={32}
                        color={'black'}
                        onPress={onPressSettingIcon}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </View>
    </ScrollView>
  );
}

export function ChatRoomSettingModal({
  visible,
  onRequestClose,
  onPressBackClose,
}: any) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.pop();
      }}
      style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          width: '20%',
          height: Platform.OS === 'android' ? '10%' : '8%',
          top: '10.5%',
          right: '5%',
          // borderRadius: 10,
        }}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
            backgroundColor: 'white',
          }}
          onPress={() => {
            navigation.replace('ChatRoomModify');
          }}>
          <Text style={{textAlign: 'center'}}>편집</Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
            backgroundColor: 'white',
          }}
          onPress={() => {
            navigation.replace('ChatRoomStackModal');
          }}>
          <Text style={{textAlign: 'center'}}>정렬</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

export function ChatRoomStackModal() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      onPress={() => {
        navigation.pop();
      }}
      style={{flex: 1}}>
      <View
        style={{
          top: '35%',
          alignItems: 'center',
          justifyContent: 'center',
          // borderWidth: 1,
        }}>
        <View
          style={{
            // width: '50%',
            // height: '50%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Pressable style={{paddingVertical: '3%'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              채팅방 순서 정렬
            </Text>
          </Pressable>
          <Pressable
            style={{
              padding: '3%',
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between',
              // borderWidth: 1,
            }}>
            <Text style={{}}>최근에 온 순</Text>
            <Icon name="check" size={24} />
          </Pressable>
          <Pressable
            style={{
              paddingVertical: '3%',
              paddingHorizontal: '10%',
              // borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>안읽은 순</Text>
            <Icon name="check" size={24} />
          </Pressable>
          <Pressable
            style={{
              paddingVertical: '3%',
              paddingHorizontal: '7%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>즐겨찾기 순</Text>
            <Icon name="check" size={24} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

export function LongPressModal() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [copiedText, setCopiedText] = useState<string | null>('');

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      }}
      onPress={() => {
        navigation.pop();
      }}>
      <View
        style={{
          backgroundColor: 'white',
          // width: 150,
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 10,
        }}>
        <Pressable
          onPress={copyToClipboard}
          style={{
            paddingHorizontal: '20%',
            paddingVertical: '3%',
          }}>
          <Text>복사</Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: '20%',
            paddingVertical: '3%',
          }}>
          <Text>복사</Text>
        </Pressable>
        <Pressable style={{paddingHorizontal: '20%', paddingVertical: '3%'}}>
          <Text>복사</Text>
        </Pressable>
        <Pressable style={{paddingHorizontal: '20%', paddingVertical: '3%'}}>
          <Text>복사</Text>
        </Pressable>
        <Pressable style={{paddingHorizontal: '20%', paddingVertical: '3%'}}>
          <Text>복사</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  viewLayout: {
    position: 'absolute',
    backgroundColor: 'white',
    width: Platform.OS === 'android' ? '80%' : '84%',
    height: Platform.OS === 'android' ? '100%' : '96%',
    bottom: '0%',
    right: '0%',
    borderTopLeftRadius: 10,
    borderWidth: 1,
  },
  viewMarginHorizontal: {
    marginHorizontal: '5%',
  },
  viewHeader: {
    marginVertical: '5%',
  },
  viewImgBar: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: '5%',
  },
  viewProfile: {
    paddingVertical: '1%',
    marginVertical: '1%',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  viewBottomBar: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    height: Platform.OS === 'android' ? '7.4%' : '8.5%',
    justifyContent: Platform.OS === 'android' ? 'center' : undefined,
    backgroundColor: '#28a7ab54',
  },
  viewInlineBottomBar: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewBottomBarIcon: {
    marginTop: Platform.OS === 'android' ? undefined : '2.5%',
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  viewIMGScroll: {
    width: '100%',
    borderWidth: 1,
  },
  image: {
    marginVertical: 20,
    width: 72,
    height: 72,
    marginHorizontal: 1,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#00000040',
  },
  images: {
    flexDirection: 'row',
    // borderWidth: 1,
  },
  imageProfile: {
    width: 48,
    height: 48,
    marginRight: '3%',
    borderRadius: 20,
  },
  profile: {
    marginTop: '5%',
    fontSize: 16,
  },
  // closeButton: {
  //   flex: 1,
  //   backgroundColor: 'black',
  // },

  // --------------------------------------------------------------------------------------------------------------ChatRoom-----------------------------------------------------
});
