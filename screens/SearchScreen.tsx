import {useNavigation} from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BorderInput from '../components/BorderInput';
import {RootStackNavigationProp} from './RootStack';

const SearchScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const DATA = [
    {
      id: 'aaaa',
      title: 'First Item',
    },
    {
      id: 'bbbb',
      title: 'Second Item',
    },
    {
      id: 'cccc',
      title: 'Third Item',
    },
    {
      id: 'dddd',
      title: 'Fourth Item',
    },
    {
      id: 'eeee',
      title: 'Fifth Item',
    },
  ];
  return (
    <>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View style={styles.input}>
            <BorderInput
              placeholder="검색어를 입력하세요."
              keyboardType="default"
              autoFocus
              inputAccessoryViewID="search"
              style={styles.realInput}
            />

            <Text style={styles.icon}>
              <Icon
                name="chevron-left"
                size={36}
                onPress={() => {
                  navigation.pop();
                }}
              />
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <View>
        <View style={styles.back}>
          <Text style={styles.mainTitle}>최근 검색</Text>
          <View style={styles.mola}>
            <FlatList
              style={styles.flatList}
              data={DATA}
              renderItem={({item}) => (
                <Pressable>
                  <View style={styles.items}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </Pressable>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default SearchScreen;

// const renderItem = ({item}: any) => {
//   <View style={styles.icon}>
//     <Text style={styles.title}>{item.title}</Text>
//   </View>;
// };

const styles = StyleSheet.create({
  back: {
    // backgroundColor: 'white',
    top: Platform.OS === 'android' ? -10 : -110,
    left: 20,
    borderWidth: 1,
    height: Platform.OS === 'android' ? 115 : 110,
    width: '90%',
    borderRadius: 12,
  },
  icon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 29.5 : 53.5,
    left: 6,
    textAlign: 'center',
  },
  input: {
    // position: 'absolute',
    top: Platform.OS === 'android' ? -15 : -50,
    alignContent: 'center',
    borderRadius: 14,

    // borderWidth: 1,
  },
  realInput: {
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    paddingHorizontal: Platform.OS === 'android' ? 50 : 50,
  },
  border: {
    alignItems: 'center',
  },
  newText: {
    top: -50,
  },
  flatList: {
    backgroundColor: 'black',
    width: '100%',
    borderRadius: 10,
  },
  mainTitle: {
    margin: 10,
  },
  title: {
    // width: 100,
    borderWidth: 1,
    borderRadius: 10,
    margin: 3,
    marginTop: 4,
    padding: 3,
    backgroundColor: 'skyblue',
  },
  items: {
    display: 'flex',
    // flexWrap: 'wrap',
    // position: 'absolute',
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  mola: {
    borderWidth: 1,
    height: Platform.OS === 'android' ? 75 : 72,
    borderRadius: 10,
  },
});
