// 배경 사진 클릭시 상세히 보는 모달 띄우려면 ImageBackground 내의 버튼들 전부 빼고 밖으로 세팅해야함.

import {useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Platform.OS === 'android' ? StatusBar.setTranslucent(true) : null;

StatusBar.setBarStyle('dark-content');

const ProfilesCard = ({children}: any) => {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 7.5;
  function truncate(text: any) {
    // 정규식을 사용해 모든 줄 바꿈 문자 제거
    const replaced = text.replace(/\n/g, '');
    if (replaced.length <= 15) {
      return replaced;
    }
    return replaced.slice(0, 15).concat('...');
  }

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [profileModalVisible, setProfileModalVisible] =
    useState<boolean>(false);

  return (
    <View>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.4 : 1,
          },
          styles.block,
        ]}
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.view}>
          <Image
            style={[styles.image, styles.block, {width: size, height: size}]}
            source={{
              uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
            }}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <View>
            <Text style={styles.nickcname}>{children}</Text>
            <Text style={styles.stateMessage}>
              {truncate('나의 하루 고달픈 하루 배고프다 저녁 뭐먹지?')}
            </Text>
          </View>
          <View style={styles.empty}></View>
        </View>
      </Pressable>
      {/* 프로필 클릭시 모달 */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        statusBarTranslucent={true}
        presentationStyle="overFullScreen">
        <View>
          <ImageBackground
            style={[styles.backImage]}
            imageStyle={{opacity: 0.7}}
            // blurRadius={0}
            source={{
              uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
            }}
            resizeMode="cover"
            resizeMethod="resize">
            <Text style={[styles.closeIcon]}>
              <Icon
                name="close"
                size={36}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </Text>
            <Text style={styles.modalTopRightButton}>
              <Icon name="settings" size={30} style={styles.settingButton} />
            </Text>
            {/* 프로필 클릭 모달 버튼 */}
            <View style={styles.modalProfileView}>
              <Pressable
                onPress={() => {
                  setProfileModalVisible(true);
                }}>
                <Image
                  style={[styles.modalProfileImage, styles.block]}
                  source={{
                    uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                  }}
                  resizeMode="cover"
                  resizeMethod="resize"
                />
              </Pressable>

              {/* 프로필 클릭 모달 */}
              <Modal
                animationType="fade"
                transparent={true}
                visible={profileModalVisible}
                statusBarTranslucent={true}
                presentationStyle="overFullScreen">
                <View>
                  <Pressable
                    onPress={() => {
                      setProfileModalVisible(!profileModalVisible);
                    }}>
                    <ImageBackground
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      source={{
                        uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
                      }}
                      resizeMode="contain"
                      resizeMethod="resize">
                      {/* <Text style={styles.closeIcon2}> */}
                      {/* <Icon name="close" size={36} /> */}
                      {/* </Text> */}
                    </ImageBackground>
                  </Pressable>
                </View>
              </Modal>
              <Text style={[styles.modalProfileText, styles.nicknameMargin]}>
                {children}
              </Text>
              <Text style={[styles.modalProfileText, styles.modalStateMessage]}>
                {truncate('나의 하루 고달픈 하루 배고프다 저녁 뭐먹지?')}
              </Text>
            </View>
            <View style={styles.bottomBar}>
              <Pressable>
                <Icon
                  name="camera"
                  size={24}
                  color="white"
                  style={styles.bottomBarIcon}
                />
                <Text style={[styles.bottomBarText, {marginLeft: 2}]}>
                  1:1 채팅
                </Text>
              </Pressable>
              <Pressable>
                <Icon
                  name="camera"
                  size={24}
                  color="white"
                  style={styles.bottomBarIcon}
                />
                <Text style={styles.bottomBarText}>보이스톡</Text>
              </Pressable>
              <Pressable>
                <Icon
                  name="camera"
                  size={24}
                  color="white"
                  style={styles.bottomBarIcon}
                />
                <Text style={styles.bottomBarText}>페이스톡</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  block: {margin: 5.5, marginRight: 6},
  view: {
    width: '95.5%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  borderBottom: {
    borderBottomWidth: 0.6,
    borderColor: '#9a9a9a',
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  modalProfileView: {
    alignContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'android' ? 380 : 500,
  },
  modalProfileImage: {
    width: Platform.OS === 'android' ? 104 : 128,
    height: Platform.OS === 'android' ? 104 : 128,
    borderRadius: Platform.OS === 'android' ? 38 : 48,
  },
  nickcname: {
    flexDirection: 'column',
    width: 100,
    height: 20,
    color: 'black',
  },
  nicknameMargin: {
    margin: Platform.OS === 'android' ? 3 : 6,
    fontSize: Platform.OS === 'android' ? 16 : 18,
    fontWeight: 'bold',
  },
  stateMessage: {
    width: 150,
    color: '#7a7a7a',
    fontSize: 11,
  },
  modalStateMessage: {
    fontSize: Platform.OS === 'android' ? 11 : 14,
  },
  empty: {
    width: 140,
    height: '100%',
  },
  modal: {
    top: 500,
    position: 'absolute',
  },
  backImage: {
    width: '100%',
    height: Platform.OS === 'android' ? '110%' : '107%',
    backgroundColor: '#000000',
  },
  closeIcon: {
    color: 'white',
    top: Platform.OS === 'android' ? 26 : 36,
    left: Platform.OS === 'android' ? 8 : 8,
    opacity: Platform.OS === 'android' ? 0.3 : 0.3,
  },
  closeIcon2: {
    color: Platform.OS === 'android' ? 'black' : 'white',
    top: Platform.OS === 'android' ? 26 : 36,
    left: Platform.OS === 'android' ? 8 : 8,
    opacity: Platform.OS === 'android' ? 0.2 : 0.2,
  },
  modalTopRightButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 32 : 38,
    left: Platform.OS === 'android' ? 365 : 350,
    color: 'white',
    opacity: 0.5,
  },
  settingButton: {},
  modalProfileText: {
    color: 'white',
  },
  bottomBar: {
    top: Platform.OS === 'android' ? 410 : 530,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '10%',
    borderColor: '#9a9a9a4a',
    borderTopWidth: 1,
  },
  bottomBarText: {
    color: 'white',
    fontSize: Platform.OS === 'android' ? 12 : 14,
    marginBottom: Platform.OS === 'android' ? 12 : 18,
  },
  bottomBarIcon: {
    margin: Platform.OS === 'android' ? 11 : 12,
  },
});
export default ProfilesCard;
