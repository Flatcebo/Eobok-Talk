import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import BorderInput from '../components/BorderInput';

const AddHPScreen = () => {
  const DATA = ['+82', '+01', '+03'];

  return (
    <View>
      <View>
        <KeyboardAvoidingView>
          <BorderInput
            keyboardType="default"
            placeholder="친구 이름"
            cursorColor="#4db5d2"
            maxLength={10}
            autoFocus
            style={styles.nameInput}
          />
        </KeyboardAvoidingView>
      </View>
      <View style={styles.nameLayout}>
        <SelectDropdown
          data={DATA}
          defaultValue={'+82'}
          onChangeSearchInputText={() => {}}
          // searchInputTxtStyle={{backgroundColor: 'red'}}
          // searchInputStyle={{backgroundColor: 'red'}}
          // rowTextStyle={{backgroundColor: 'blue'}}
          // selectedRowStyle={{backgroundColor: 'green'}}
          // selectedRowTextStyle={{color: 'red'}}
          // rowStyle={{backgroundColor: 'black'}}
          // dropdownStyle={{backgroundColor: 'black'}}
          buttonStyle={{
            backgroundColor: 'white',
            width: 60,
            top: Platform.OS === 'android' ? 10 : -43,
            left: -70,
            borderRadius: 12,
            position: 'absolute',
          }}
          buttonTextStyle={{width: 0, color: 'black', fontSize: 14}}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <BorderInput
          keyboardType="number-pad"
          textContentType={'telephoneNumber'}
          placeholder="친구 전화번호"
          cursorColor="#4db5d2"
          maxLength={11}
          style={styles.phoneInput}
        />
      </View>
    </View>
  );
};

export default AddHPScreen;

const styles = StyleSheet.create({
  nameLayout: {marginLeft: 80},
  phoneInput: {
    backgroundColor: 'white',
    top: Platform.OS === 'android' ? -13 : -90,
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    // paddingHorizontal: Platform.OS === 'android' ? 50 : 50,
    marginHorizontal: Platform.OS === 'android' ? 0 : 0,
    left: 0,
    borderRadius: 10,
    width: '97%',
    paddingStart: 10,
    // borderWidth: 1,
  },
  nameInput: {
    backgroundColor: 'white',
    top: Platform.OS === 'android' ? 0 : -20,
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    // paddingHorizontal: Platform.OS === 'android' ? 50 : 50,
    marginHorizontal: Platform.OS === 'android' ? 0 : 0,
    left: '3%',
    borderRadius: 10,
    width: '94%',
    paddingStart: 10,

    // borderWidth: 1,
  },
});
