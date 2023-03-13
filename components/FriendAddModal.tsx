import {Modal, Pressable, View} from 'react-native';

const FriendAddModal = ({visible, onPress}: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
      presentationStyle="overFullScreen">
      <View>
        <Pressable onPress={onPress}></Pressable>
      </View>
    </Modal>
  );
};

export default FriendAddModal;
