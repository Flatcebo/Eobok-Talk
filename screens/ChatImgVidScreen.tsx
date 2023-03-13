import {useState} from 'react';
import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatImgVidScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.viewLayout}>
        <View style={styles.viewHeader}>
          <Pressable
            style={styles.pressableHeader}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.textHeader}>사진,동영상</Text>
            <Icon name="add" size={16} color={'black'} />
          </Pressable>

          <Button
            dark={true}
            style={styles.buttonHeader}
            buttonColor={'#28a7ab36'}
            textColor={'black'}>
            전부 정리
          </Button>
          {/* <Pressable>
          <Text>전부 정리</Text>
        </Pressable> */}
        </View>
      </View>
      {/* --------------------------------------------------------------------- 모달------------------------------------------------------------------------------------- */}
      <View>
        <Modal
          visible={modalVisible}
          transparent={true}
          statusBarTranslucent={false}
          animationType="fade"
          presentationStyle="overFullScreen">
          <Pressable
            style={{
              flex: 1,
              backgroundColor: '#00000001',
              alignContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <View
              style={{
                position: 'absolute',
                top: Platform.OS === 'android' ? '10.45%' : '11.6%',
                left: '30%',
                width: '50%',
                height: Platform.OS === 'android' ? '10%' : '8%',
                backgroundColor: 'white',
                justifyContent: 'center',
                borderRadius: 6,
                borderWidth: 1,
              }}>
              <View style={styles.viewTextModal}>
                <Text style={styles.textModal}>
                  사진 : <Text>16개/10.00MB</Text>
                </Text>

                <Pressable style={styles.pressableClearButton}>
                  <Text style={styles.textModal}>정리</Text>
                </Pressable>
              </View>
              <View style={styles.viewTextModal}>
                <Text style={styles.textModal}>
                  동영상 :<Text>16개/10.00MB</Text>
                </Text>
                {/* <Text>16개/10.00MB</Text> */}
                <Pressable style={styles.pressableClearButton}>
                  <Text style={styles.textModal}>정리</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.viewContent}>
          <View style={styles.viewContentText}>
            <Text style={styles.textContentDate}>2022.02.07</Text>
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8353415%2F83534158287.1.jpg&type=f372_372',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
        </View>
        <View style={styles.viewContent}>
          <View style={styles.viewContentText}>
            <Text style={styles.textContentDate}>2022.02.07</Text>
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://blogfiles.pstatic.net/MjAyMjA5MDRfMjQx/MDAxNjYyMjc0Mjc4NDM0.qN12EODdiqrVmvoAuhFxH30mbCRaskvweJ_xZC4uQLIg.xbi9vYcqqXbNWGAo4P4wUhl8VxSGxwwIKINobXL-Apcg.JPEG.seoraestudio/220815.%EC%9D%B4%ED%98%84%EC%A7%846249.jpg',
              }}
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '93%',
    // width: '100%',
    // marginHorizontal: '1%',
    // borderWidth: 1,
  },
  viewLayout: {
    marginHorizontal: '5%',
    marginTop: '5%',
    // borderWidth: 1,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  viewContent: {
    marginBottom: '5%',
    //   borderWidth: 1,
  },
  viewContentText: {
    marginVertical: '10%',
    marginHorizontal: '5%',
  },
  viewImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: Platform.OS === 'android' ? '20%' : 114,
    marginHorizontal: '5%',
  },
  image: {
    width: Platform.OS === 'android' ? '33%' : '33%',
    height: Platform.OS === 'android' ? 120 : 114,
    marginBottom: '0.5%',
    borderWidth: 0.01,
    borderColor: '#9a9a9a',
    backgroundColor: '#ffffff',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContentDate: {
    fontSize: 12,
  },
  pressableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonHeader: {
    borderRadius: 4,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  //-----------------------------------------------------------------------------------  MODAL --------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------  MODAL --------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------  MODAL --------------------------------------------------------------------------------------------------------------
  viewTextModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewDataModal: {
    width: '30%',
  },
  pressableClearButton: {
    backgroundColor: 'red',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    borderRadius: 4,
  },
  textModal: {
    fontSize: 12,
    alignItems: 'center',
  },
});

export default ChatImgVidScreen;
