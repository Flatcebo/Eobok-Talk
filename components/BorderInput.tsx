import {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextInputSelectionChangeEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BorderInputProps {
  autoFocus?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  clearButtonMode?:
    | 'never'
    | 'while-editing'
    | 'unless-editing'
    | 'always'
    | undefined;
  defaultValue?: string | undefined;
  enablesReturnKeyAutomatically?: boolean | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  placeholder?: string | undefined;
  children?: any | undefined;
  inputAccessoryViewID?: string | undefined;
  style?: StyleProp<TextStyle>;
  cursorColor?: ColorValue | null | undefined;
  maxLength?: number | undefined;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined
    | any;

  onSelectionChange?:
    | ((e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void)
    | undefined;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

export default function BorderInput({
  autoFocus,
  autoCapitalize,
  clearButtonMode,
  defaultValue,
  enablesReturnKeyAutomatically,
  keyboardType,
  placeholder,
  inputAccessoryViewID,
  style,
  cursorColor,
  maxLength,
  textContentType,
  onSubmitEditing,
  onChange,
  onSelectionChange,
  value,
  onChangeText,
}: BorderInputProps) {
  return (
    <>
      <SafeAreaView>
        <TextInput
          value={value}
          style={style}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          autoCapitalize={autoCapitalize}
          clearButtonMode={clearButtonMode}
          enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
          keyboardType={keyboardType}
          placeholder={placeholder}
          inputAccessoryViewID={inputAccessoryViewID}
          cursorColor={cursorColor}
          maxLength={maxLength}
          onChangeText={onChangeText}
          onChange={onChange}
          textContentType={textContentType}
          onSelectionChange={onSelectionChange}
          onSubmitEditing={onSubmitEditing}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    // padding: Platform.OS === 'android' ? 10 : 16,
    paddingVertical: Platform.OS === 'android' ? 10 : 16,
    paddingHorizontal: Platform.OS === 'android' ? 50 : 50,
    // backgroundColor: '#72bde216',
    // borderRadius: 14,
    // width: '70%',
  },
});
