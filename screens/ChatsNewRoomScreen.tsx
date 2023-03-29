import {Platform, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import ProfilesCard from '../components/ProfilesCard';

const ChatsNewRoomScreen = () => {
  return (
    <View>
      <FlatList
        style={{}}
        data={undefined}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={{}}>
            <ProfilesCard style={{marginTop: 4, marginRight: 6}}>
              1
            </ProfilesCard>
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
            <ProfilesCard>13</ProfilesCard>
            <ProfilesCard>14</ProfilesCard>
          </View>
        }
      />
    </View>
  );
};
const renderItem = ({items}: any) => <ProfilesCard post={items} />;

const styles = StyleSheet.create({});

export default ChatsNewRoomScreen;
