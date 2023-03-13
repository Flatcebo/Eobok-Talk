import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';

import BorderInput from '../components/BorderInput';

const AddIDScreen = () => {
  return (
    <KeyboardAvoidingView>
      <BorderInput
        keyboardType="default"
        placeholder="친구 ID"
        cursorColor="#4db5d2"
        style={[styles.input, {paddingStart: 10}]}
        autoFocus
      />
    </KeyboardAvoidingView>
  );
};

export default AddIDScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    top: Platform.OS === 'android' ? 0 : -30,
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    // paddingHorizontal: Platform.OS === 'android' ? 50 : 50,
    marginHorizontal: Platform.OS === 'android' ? 50 : 50,
    borderRadius: 10,
  },
});
