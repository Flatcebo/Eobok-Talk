import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';
import {Switch, Text} from 'react-native-paper';
import {RefreshButton} from '../components/AllButtons';
import {WidthLine} from '../components/WidthLine';
import {RootStackNavigationProp} from './RootStack';

const FriendManageScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  // const [refresh, setRefresh] = useState<boolean>(false);
  // const onRefresh = useCallback(() => {
  //   setRefresh(true);
  //   setTimeout(() => {
  //     setRefresh(false);
  //   }, 2000);
  // }, []);
  return (
    <View style={styles.layout}>
      <View style={styles.firstView}>
        <View>
          <Text style={styles.firstViewText}>자동 친구 추가</Text>
          <Switch style={styles.firstViewSwitch} />
        </View>
        <Text style={styles.firstViewDescription}>
          이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다 사랑의 풀이 없으면
          인간은 사막이다 오아시스도 없는 사막이다 보이는 끝까지 찾아다녀도
          목숨이 있는 때까지 방황하여도 보이느것은 거친 모래뿐일 것이다 이상의
          꽃이 없으면 쓸쓸한
        </Text>
      </View>
      <View style={[styles.firstView, {marginTop: 0}]}>
        <Text style={styles.firstViewText}>친구 목록 새로고침</Text>
        {/* <Pressable
          onPress={() => {
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />;
          }}></Pressable> */}
        <RefreshButton style={styles.refreshButton} size={26} />
      </View>
      <WidthLine style={styles.borderBottom} />
      <View style={styles.firstView}>
        <Text style={{fontSize: 14}}>친구관리</Text>
      </View>
      <Pressable
        android_ripple={{color: '#9a9a9a', foreground: true}}
        onPress={() => {
          navigation.push('FriendHide');
        }}>
        <View>
          <Text style={styles.firstViewText}>숨김친구 관리</Text>
        </View>
      </Pressable>
      <Pressable
        android_ripple={{color: '#9a9a9a', foreground: true}}
        onPress={() => {
          navigation.push('FriendBlock');
        }}>
        <View>
          <Text style={styles.firstViewText}>차단친구 관리</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default FriendManageScreen;

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: '5%',
  },
  firstView: {
    marginVertical: '5.5%',
    marginBottom: '4%',
  },
  firstViewText: {
    fontSize: 20,
    marginBottom: '1.5%',
    justifyContent: 'space-between',
  },
  firstViewDescription: {
    fontSize: 10,
    letterSpacing: 0.1,
  },
  firstViewSwitch: {
    position: 'absolute',
    left: Platform.OS === 'android' ? '86.5%' : '85.5%',
    top: Platform.OS === 'android' ? '-6%' : '-25%',
  },
  borderBottom: {
    width: '105%',
    borderBottomWidth: 0.6,
    borderColor: '#9a9a9a',
    alignSelf: 'center',
    alignItems: 'center',
  },
  refreshButton: {
    position: 'absolute',
    left: Platform.OS === 'android' ? '88%' : '88.5%',
  },
});
