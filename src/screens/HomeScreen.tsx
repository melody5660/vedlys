import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';


const HomeScreen = ({ next }: { next: string }) => {
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
        
    console.log('lang: ', i18n.language);
    console.log('next: ', next);
    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        navigation.navigate(next, {});
    };
    return (
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 3 }}>
                <Text>Bendra info apie programėlę</Text>

                <Text>Paprašyti nusistatyti kalbą ir</Text>

                <Text>leisti naudoti geolokacijos nustatymą, kai programėlė įjungta, kad  prireiktus naudotis, tokie niekai negaišintų laiko

                    Pakvieti įsidiegus panaršyti, kad būtų aiškiau, ko tikėtis

                    parašome, apie ženklus </Text>
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