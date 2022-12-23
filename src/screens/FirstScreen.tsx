import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';

const FirstScreen = () => {
    const navigation = useNavigation();
    console.log("next", navigation.getState().routes);


    const { t, i18n } = useTranslation();



    return (
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{t('firstScreen.text1')}</Text>
                <Button
                    title={t('firstScreen.text1')}
                    buttonStyle={{
                        backgroundColor: '#3BB143',
                        borderWidth: 2,
                        height: 100,
                        width: 300,
                        borderColor: 'black',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        //width: 130,
                        minWidth: 130,
                        marginHorizontal: 20,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold', color: 'black' }}
                    onPress={() => navigation.navigate("attentionScreen", {})}

                />
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title={t('firstScreen.text2')}
                    buttonStyle={{
                        backgroundColor: '#808080',
                        borderWidth: 2,
                        height: 100,
                        width: 300,
                        borderColor: 'black',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        //width: 130,
                        minWidth: 130,
                        marginHorizontal: 20,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold', color: 'black' }}
                    onPress={() => navigation.navigate("attentionScreen", {})}

                />

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={100} color="black" onPress={() => navigation.navigate("menuScreen", {})} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../assets/images/aed.png')} style={{ width: 100, height: 100 }} />
                </View>
            </View>
        </View>


    );
}
export default FirstScreen;
