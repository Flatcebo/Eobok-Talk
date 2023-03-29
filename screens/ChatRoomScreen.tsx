import {
  Alert,
  BackHandler,
  Image,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  TextInputChangeEventData,
  TextInputSubmitEditingEventData,
  useWindowDimensions,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BorderInput from '../components/BorderInput';
import {RootStackNavigationProp} from './RootStack';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {FloatingButton, SearchModalButton} from '../components/AllButtons';

const ChatRoomScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 10;

  const [message, setMessage] = useState('');
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (
    e:
      | NativeSyntheticEvent<TextInputChangeEventData>
      | NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    const {text} = e.nativeEvent;

    useEffect(() => {
      return () => {
        setMessage(text);
        console.log(text);
      };
    }, [text]);
  };
  //   useEffect(() => {
  //     const backScreen = () => {

  //         return(
  //             <>
  //          <Pressable onPress={ () => {
  //             if (setOpen(false) === undefined) {
  //               setOpen(true);
  //             }

  //         }}><Text>Click</Text></Pressable>
  //         </>
  //         )
  //     }
  //     );
  //     return true;
  //     };

  //     const backHandler = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       backScreen,
  //     );

  //     return () => backHandler.remove();
  // }, []);

  useEffect(() => {
    const backScreens = () => {
      //   <>
      //     <View>
      //       <Pressable
      //         style={{width: 100, height: 100, top: -200, borderWidth: 1}}
      //         onPress={() => {
      setOpen(false) === setOpen(false)
        ? navigation.pop()
        : backHandler.remove();
      //   if (setOpen(false) === undefined) {
      //     navigation.pop();
      // backHandler.remove();
      // setOpen(true);
      //   } else {
      //     backHandler.remove();
      //   }
      //   BackHandler.removeEventListener;
      //           }
      //         }}>
      //         <Text>Click</Text>
      //       </Pressable>
      //     </View>
      //   </>;

      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backScreens,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.mainView}>
      {/* zIndex를 먹이면 이상한 공간이 생겨서 클릭시 닫힘 */}
      {Platform.OS === 'android' ? undefined : (
        <View
          style={{
            position: 'absolute',
            width: 400,
            zIndex: 1,
            // borderWidth: 1,
          }}>
          <FloatingButton />
        </View>
      )}

      <ScrollView style={styles.scrollView}>
        {/* <View> */}
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
            <Text style={styles.nickcname}>박쇼티</Text>
          </View>
        </View>
        <View style={styles.messageLayout}>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>

          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.message}>
            <View style={styles.messageView}>
              <Text>HI.ㅁasdfasdfasfasdsadfasfasdㅇㄹ</Text>
            </View>
            <View>
              <Text style={styles.asideMessageText}>1</Text>
              <Text style={styles.asideMessageText}>오전 11:52</Text>
            </View>
          </View>
        </View>
        {/* </View> */}
        <View style={styles.messageLayout2}>
          <View style={styles.messageView2}>
            <Text>HI.</Text>
          </View>

          <View style={styles.messageView2}>
            <Text>HI.</Text>
          </View>
          <View style={styles.messageView2}>
            <Text>HI.</Text>
          </View>
          <View style={styles.message}>
            <View>
              <Text style={styles.asideMessageText2}>1</Text>
              <Text style={styles.asideMessageText2}>오전 11:52</Text>
            </View>
            <View style={styles.messageView2}>
              <Text>HI.ㅁasdfasdfasfasdsadfasfasdㅇㄹ</Text>
            </View>
          </View>
        </View>
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
            <Text style={styles.nickcname}>박쇼티</Text>
          </View>
        </View>
        <View style={styles.messageLayout}>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>

          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.messageView}>
            <Text>HI.</Text>
          </View>
          <View style={styles.message}>
            <View style={styles.messageView}>
              <Text>
                HI.ㅁasdfasdfasfasdsadfasfasㄴㅁㄴㅁㅇㄹㄴㅁㄹㄴㅁㄹㅇㅁㄴㄹㄴㅁㄹㄴㅁㄹㅁㄴㄹㄴㅁㄹㄴㅁㄴㅇㄹㅇㄴㅁㄹㅇㅁㄴㄹㅇㄴㅁㄹㅇㅁㄴㄹㅁㄴㄴㅁㅇㄹㅁㄴㄹㄴㅁㅇㄹㅁㅇㄴㄹㅇㅁㄴㄹㅇㅁㄴㅇㄹㄴㅁㄹㄴㅇㅇㄴㅁㄹㄹㅇㅁㄴㅇㄹㅁㄹㅁㄴㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁㅇㄹㅁㄴㅁㄴㄹㅁㄴㄹㅇsdafasfasdfasdfasdfasfsadfadsfasfasdㄹdㅇㄹ
              </Text>
            </View>
            <View>
              <Text style={styles.asideMessageText}>1</Text>
              <Text style={styles.asideMessageText}>오전 11:52</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.test}></View> */}
      </ScrollView>

      <View>
        <View style={styles.bottomBar}>
          <Pressable style={styles.bottomBarAddIcon}>
            <Text>
              <Icon name="add" size={24} />
            </Text>
          </Pressable>
          <BorderInput
            style={styles.bottomBarInput}
            keyboardType="default"
            value={message}
            onChange={() => handleChange}
            // onSelectionChange={handleChange}
            onSubmitEditing={() => handleChange}
          />
          <Pressable style={styles.bottomBarEmoticonIcon}>
            <Text>
              <Icon name="insert-emoticon" size={30} />
            </Text>
          </Pressable>
          <Pressable style={styles.bottomBarSendIcon} onPress={() => {}}>
            <Text>
              <Icon name="send" size={24} onPress={() => {}} />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {margin: 5.5, marginRight: 6},
  mainView: {
    height: '100%',
    zIndex: 0,
  },
  scrollView: {
    top: Platform.OS === 'android' ? '-8%' : '-9%',
    marginTop: Platform.OS === 'android' ? '14%' : '19%',
  },
  view: {
    width: '95.5%',
    // marginTop: Platform.OS === 'android' ? '14%' : '19%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  nickcname: {
    color: 'black',
  },
  messageLayout: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '4%',
  },
  messageLayout2: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  messageView: {
    marginLeft: '15%',
    marginBottom: '1%',
    padding: Platform.OS === 'android' ? '1.9%' : '3%',
    paddingVertical: Platform.OS === 'android' ? '1.5%' : '2.5%',
    maxWidth: '70%',
    backgroundColor: '#28a7ab54',
    borderRadius: 14,
  },
  messageView2: {
    marginBottom: '1%',
    marginRight: '5%',
    padding: Platform.OS === 'android' ? '1.9%' : '3%',
    paddingVertical: Platform.OS === 'android' ? '1.5%' : '2.5%',
    backgroundColor: '#28a7ab54',
    borderRadius: 14,
  },
  message: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'center',
  },
  image: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
    borderRadius: 18,
    zIndex: 0,
  },
  asideMessageText: {
    marginBottom: '10%',
    marginLeft: 3,
    fontSize: 10,
  },
  asideMessageText2: {
    marginTop: Platform.OS === 'android' ? '2%' : '10%',
    marginRight: 4,
    marginBottom: '6%',
    fontSize: 10,
    textAlign: 'right',
  },
  bottomBar: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    height: Platform.OS === 'android' ? 50 : 70,
    alignItems: 'center',
    backgroundColor: '#28a7ab54',
  },
  bottomBarInput: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? undefined : 36,
    left: Platform.OS === 'android' ? '-35%' : '-35%',
    width: '70%',
    paddingHorizontal: Platform.OS === 'android' ? '2%' : '3%',
    paddingVertical: Platform.OS === 'android' ? '3.8%' : '3%',
    borderRadius: Platform.OS === 'android' ? undefined : 30,
    backgroundColor: '#f4f0f0',
    fontSize: 18,
  },
  bottomBarAddIcon: {
    position: 'absolute',
    padding: '4.4%',
    paddingVertical: '3%',
    left: '0%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarEmoticonIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? '20%' : '15%',
    right: '16%',
  },
  bottomBarSendIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? '22%' : '17%',
    right: '4.5%',
  },
  // test: {
  //   height: Platform.OS === 'android' ? 40 : 60,
  //   top: -200,
  // },
});
export default ChatRoomScreen;
