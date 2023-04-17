import {useNavigation} from '@react-navigation/native';
import {Image} from '@rneui/base';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp} from './RootStack';

const SeeMoreScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>더보기</Text>
        <View style={styles.topIcons}>
          <Pressable
            onPress={() => {
              navigation.push('SeeMoreSetting');
            }}>
            <Text>
              <Icon name="settings" size={28} style={{color: 'black'}} />
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.myCard}>
        <Text style={styles.myCardHeader}>내정보</Text>
        <View style={styles.myCardDirection}>
          <Image style={styles.image} />
          <Text style={styles.myCardNickname}>name</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 2.67,
    color: 'black',
  },
  topIcons: {
    flexDirection: 'row',
    // flex: 0.87,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  myCard: {
    // height: '10%'
    // paddingVertical: 12,
    // borderWidth: 1,
  },
  myCardHeader: {
    color: 'black',
    fontSize: 16,
    paddingVertical: 16,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 10,
    // borderWidth: 1,
  },
  myCardDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myCardNickname: {
    color: 'black',
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: '400',
  },
});
export default SeeMoreScreen;
