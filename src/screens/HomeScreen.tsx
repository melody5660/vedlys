import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import i18n from '../../i18n';

const HomeScreen = ({ next }: { next: string }) => {
    const navigation = useNavigation();
    // I18n.
    //const { t, i18n as t } = useTranslation();

    const styles = StyleSheet.create({
        container: {
          backgroundColor: 'white',
          padding: 16,
        },
        dropdown: {
          height: 50,
          borderColor: 'gray',
          borderWidth: 0.5,
          borderRadius: 8,
          paddingHorizontal: 8,
        },
        icon: {
          marginRight: 5,
        },
        label: {
          position: 'absolute',
          backgroundColor: 'white',
          left: 22,
          top: 8,
          zIndex: 999,
          paddingHorizontal: 8,
          fontSize: 14,
        },
        placeholderStyle: {
          fontSize: 16,
        },
        selectedTextStyle: {
          fontSize: 16,
        },
        iconStyle: {
          width: 20,
          height: 20,
        },
        inputSearchStyle: {
          height: 40,
          fontSize: 16,
        },
      });

    console.log('next: ', next);
    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        navigation.navigate(next, {});
    };
    let data1 = [
        { label: 'Lietuvių', value: 'lt' },
        { label: 'English', value: 'en' }];
    const [isFocus, setIsFocus] = React.useState(false);
    const [language, setLanguage] = React.useState('');

    return (
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 3 }}>
                <Text>{i18n.t('homeScreen.genericInfo')}</Text>
                <Text>{i18n.t('homeScreen.text1')}</Text>
           
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Pasirinkite kalbą' : '...'}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    value={language}
                    onChange={item => {
                        console.log(item);
                        i18n.locale = item.value;
                        setLanguage(item.value);
                    }}
                    data={data1}
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <AntDesign name="checksquareo" size={100} color="green" />
                <AntDesign name="closesquareo" size={100} color="red" />
                <AntDesign name="eyeo" size={100} color="black" />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>

                <AntDesign name="arrowright" size={100} color="black" onPress={buttonClickedHandler} />
            </View>
        </View >
    );
}
//<Text style={styles.text}>Start</Text>
const styles = StyleSheet.create({


    roundButton: {
        marginTop: 20,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#FF0000',
    },
    text: {
        fontWeight: '700',
    },
});

export default HomeScreen;