import {Platform, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {BlockButton} from '../components/AllButtons';
import BorderInput from '../components/BorderInput';
import ProfilesCard from '../components/ProfilesCard';

const FriendBlockScreen = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.firstView}>
        <BorderInput
          placeholder="이름 입력"
          keyboardType="default"
          inputAccessoryViewID="search"
          style={styles.input}
        />
      </View>
      <View style={styles.secondView}>
        <FlatList
          data={undefined}
          renderItem={renderItem}
          ListHeaderComponent={
            <View>
              <View>
                <ProfilesCard>1</ProfilesCard>
                <BlockButton />
              </View>
              <ProfilesCard>2</ProfilesCard>
              <ProfilesCard>3</ProfilesCard>
              <ProfilesCard>4</ProfilesCard>
              <ProfilesCard>5</ProfilesCard>
              <ProfilesCard>6</ProfilesCard>
              <ProfilesCard>7</ProfilesCard>
              <ProfilesCard>8</ProfilesCard>
              <ProfilesCard>9</ProfilesCard>
              <ProfilesCard>10</ProfilesCard>
              <ProfilesCard>11</ProfilesCard>
              <ProfilesCard>12</ProfilesCard>
            </View>
          }
        />
      </View>
    </View>
  );
};

const renderItem = ({items}: any) => <ProfilesCard post={items} />;

const styles = StyleSheet.create({
  layout: {
    // marginHorizontal: '5%',
    // alignContent: 'center',
    // alignItems: 'center',
    height: '30%',
  },
  firstView: {
    alignItems: 'center',
  },
  view: {
    alignContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  secondView: {
    top: Platform.OS === 'android' ? 5 : -50,
    height: Platform.OS === 'android' ? 523 : 668,
    width: '100%',
    // borderWidth: 1,
  },
  input: {
    top: Platform.OS === 'android' ? -10 : -30,
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    paddingHorizontal: Platform.OS === 'android' ? 30 : 30,
    backgroundColor: 'white',
    // minWidth: '40%',
    maxWidth: '80%',
    maxHeight: '100%',
    borderRadius: 100,
  },
});

export default FriendBlockScreen;
