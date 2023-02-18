import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../../i18n';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import { Button, Card } from '@rneui/themed';
import { Button } from "@react-native-material/core";

const MenuScreen = () => {
    const navigation = useNavigation();


    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        navigation.navigate(next, {});
    };

    return (
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title={`${i18n.t('menuScreen.stopBlood')}`}
                    onPress={() => { navigation.navigate("INFO_BLOOD", {}) }}
                    style={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}                />
                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                    title={`${i18n.t('menuScreen.enliven')}`}
                    onPress={() => { navigation.navigate("STOP_BLOOD_STEP_START_REVIVE", {}) }}
                    style={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}                />
                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                    title={`${i18n.t('menuScreen.choke')}`}
                    onPress={() => { navigation.navigate("STOP_CHOKE", {}) }}
                    style={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}                />
                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                    title={`${i18n.t('menuScreen.stroke')}`}
                    onPress={() => { navigation.navigate("STOP_STROKE", {}) }}
                    style={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}                />
                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                    title={`${i18n.t('menuScreen.other')}`}
                    onPress={() => { navigation.navigate("STOP_OTHER", {}) }}
                    style={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 80, height: 80, maxWidth: 350, width: 350}}                />
                
            </View>

        </View>


    );
}
export default MenuScreen;
