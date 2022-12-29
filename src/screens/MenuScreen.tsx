import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';


const MenuScreen = ({ element }: { element: any }) => {
    const navigation = useNavigation();

    const { t, i18n } = useTranslation();

    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        navigation.navigate(next, {});
    };

    return (
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title={`${t('menuScreen.stopBlood')}`}
                    onPress={() => { navigation.navigate("INFO_BLOOD", {}) }}
                />
                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                    title={`${t('menuScreen.enliven')}`}
                    onPress={() => { navigation.navigate("STOP_BLOOD_STEP_START_REVIVE", {}) }}
                />
                
            </View>
            {/*
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={100} color="black" onPress={() => navigation.navigate("Root", {})} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowright" size={100} color="black" onPress={buttonClickedHandler} />
                </View>
            </View>
            */}

        </View>


    );
}
export default MenuScreen;
