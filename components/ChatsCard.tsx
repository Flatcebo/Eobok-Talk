//Data Formatting

import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import ProfilesCard from './ProfilesCard';

const ChatsCard = ({children}: any) => {
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
  return (
    <View>
      {/* <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.4 : 1,
          },
          styles.block,
        ]}> */}
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
      {/* </Pressable> */}
      <View style={styles.date}>
        <Text style={styles.dateText}>오후 4:31</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {margin: 5.5, marginRight: 6},
  view: {
    width: '93%',
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
  nickcname: {
    flexDirection: 'column',
    width: 100,
    height: 20,
    color: 'black',
  },
  stateMessage: {
    width: 150,
    color: '#7a7a7a',
    fontSize: 11,
  },
  empty: {
    width: 140,
    height: '100%',
  },
  date: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 350 : 330,
  },
  dateText: {
    fontSize: 10,
  },
});

export default ChatsCard;
