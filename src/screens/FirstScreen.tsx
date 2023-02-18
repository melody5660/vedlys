import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import i18n from '../../i18n';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
//import { Button } from '@rneui/themed';
import { Button } from "@react-native-material/core";


const FirstScreen = () => {
    const navigation = useNavigation();
    console.log("next", navigation.getState().routes);

    const handlePress = () => {
        navigation.navigate('mapScreen');
    }

    /*

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

    */

    return (
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title={i18n.t('firstScreen.text1')}
                    color="#64842b"
                    titleStyle={{ fontWeight: 'bold', color: 'black' }}
                    onPress={() => navigation.navigate("attentionScreen", {})}
                    style={{maxHeight: 100, height: 100, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 100, height: 100, maxWidth: 350, width: 350}}
                />
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title={i18n.t('firstScreen.text2')}
                    color="#808080"
                    titleStyle={{ fontWeight: 'bold', color: 'black' }}
                    onPress={() => navigation.navigate("attentionScreen", {})}
                    style={{maxHeight: 100, height: 100, maxWidth: 350, width: 350}}
                    contentContainerStyle={{maxHeight: 100, height: 100, maxWidth: 350, width: 350}}

                />

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="arrowleft" size={100} color="black" onPress={() => navigation.navigate("menuScreen", {})} />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source={require('../../assets/images/aed.png')} style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    );
}
export default FirstScreen;
