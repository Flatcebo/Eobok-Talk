import {Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import BorderInput from '../components/BorderInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfilesCard from '../components/ProfilesCard';
import {FlatList} from 'react-native-gesture-handler';
import {BlockButton, HideButton} from '../components/AllButtons';

const FriendModifyScreen = () => {
  return (
    <View style={styles.view}>
      <BorderInput
        placeholder="이름 및 전화번호 입력"
        keyboardType="default"
        inputAccessoryViewID="search"
        style={styles.input}
      />
      {/* <Text style={styles.icon}>
        <Icon name="search" size={36} />
      </Text> */}
      <View style={styles.secondView}>
        <FlatList
          data={undefined}
          renderItem={renderItem}
          ListHeaderComponent={
            <View>
              <View>
                <ProfilesCard>1</ProfilesCard>
                <HideButton />
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
    top: Platform.OS === 'android' ? 0 : -20,
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    paddingHorizontal: Platform.OS === 'android' ? 30 : 30,
    backgroundColor: 'white',
    maxWidth: '80%',
    maxHeight: '100%',
    borderRadius: 100,
  },
  icon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 29.5 : 53.5,
    left: 6,
    textAlign: 'center',
  },
});

export default FriendModifyScreen;
