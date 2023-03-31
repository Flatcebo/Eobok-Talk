import {Platform, Pressable, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {RadioButton, Text} from 'react-native-paper';
import ProfilesCard from '../components/ProfilesCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';

const ChatsNewRoomScreen = () => {
  const [radioOn, radioOff] = useState<boolean>(false);

  return (
    <View>
      <FlatList
        style={{}}
        data={undefined}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={{}}>
            {radioOn ? (
              <Pressable
                style={{
                  width: '100%',
                  height: '7.3%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  zIndex: 1,
                  //   borderWidth: 1,
                }}
                onPress={() => {
                  radioOff(false);
                }}>
                <ProfilesCard inviteBlock>1</ProfilesCard>

                <Icon
                  name="brightness-high"
                  size={26}
                  style={{
                    flex: Platform.OS === 'android' ? 1 : 1,
                    right: Platform.OS === 'android' ? undefined : '20%',
                  }}
                />
              </Pressable>
            ) : (
              <Pressable
                style={{
                  width: '100%',
                  height: '7.3%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  zIndex: 1,
                  //   borderWidth: 1,
                }}
                onPress={() => {
                  radioOff(true);
                }}>
                <ProfilesCard inviteBlock>1</ProfilesCard>

                <Icon
                  name="brightness-low"
                  size={26}
                  style={{
                    flex: Platform.OS === 'android' ? 1 : 1,
                    right: Platform.OS === 'android' ? undefined : '20%',
                  }}
                />
              </Pressable>
            )}
            <ProfilesCard inviteBlock>2</ProfilesCard>
            <ProfilesCard inviteBlock>3</ProfilesCard>
            <ProfilesCard inviteBlock>4</ProfilesCard>
            <ProfilesCard inviteBlock>5</ProfilesCard>
            <ProfilesCard inviteBlock>6</ProfilesCard>
            <ProfilesCard inviteBlock>7</ProfilesCard>
            <ProfilesCard inviteBlock>8</ProfilesCard>
            <ProfilesCard inviteBlock>9</ProfilesCard>
            <ProfilesCard inviteBlock>10</ProfilesCard>
            <ProfilesCard inviteBlock>11</ProfilesCard>
            <ProfilesCard inviteBlock>12</ProfilesCard>
            <ProfilesCard inviteBlock>13</ProfilesCard>
            <ProfilesCard inviteBlock>14</ProfilesCard>
          </View>
        }
      />
    </View>
  );
};
const renderItem = ({items}: any) => <ProfilesCard post={items} />;

const styles = StyleSheet.create({});

export default ChatsNewRoomScreen;
