import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import i18n from '../../i18n';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AttentionScreen = () => {
    const navigation = useNavigation();
    console.log("next", navigation.getState().routes);

    console.log("next", navigation.getState().routes.find(e => e.name === 'attentionScreen'));
    const next = navigation.getState().routes.find(e => e.name === 'attentionScreen')?.params?.next;
    console.log("next", next);

    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        navigation.navigate(next, {});
    };

    console.log('Attention screen');

    return (
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{i18n.t('attentionScreen.text1')}</Text>
            </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', backgroundColor: "white" }}>
                        <Text>{i18n.t('attentionScreen.text2')}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: "white" }}>
                        <Text>{i18n.t('attentionScreen.text3')}</Text>
                    </View>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', backgroundColor: "white" }}>
                        <Text>{i18n.t('attentionScreen.text4')}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: "white" }}>
                        <Text>{i18n.t('attentionScreen.text5')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                    <Text>{i18n.t('attentionScreen.text6')}</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={100} color="black" onPress={() => navigation.navigate("menuScreen", {})} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowright" size={100} color="black" onPress={() => navigation.navigate("menuScreen", {})} />
                </View>
            </View>
        </View>
        /*
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{t('attentionScreen.text1')}</Text>
            </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                    <View style={{ flex: 1, alignItems: 'right', justifyContent: 'right', backgroundColor: "white" }}>
                        <Text>{t('attentionScreen.text2')}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left', backgroundColor: "white" }}>
                        <Text>{t('attentionScreen.text3')}</Text>
                    </View>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                    <View style={{ flex: 1, alignItems: 'right', justifyContent: 'right', backgroundColor: "white" }}>
                        <Text>{t('attentionScreen.text4')}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left', backgroundColor: "white" }}>
                        <Text>{t('attentionScreen.text5')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                    <Text>{t('attentionScreen.text6')}</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={100} color="black" onPress={() => navigation.navigate("menuScreen", {})} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowright" size={100} color="black" onPress={() => navigation.navigate("menuScreen", {})} />
                </View>
            </View>
        </View>
*/

    );
}
export default AttentionScreen;
